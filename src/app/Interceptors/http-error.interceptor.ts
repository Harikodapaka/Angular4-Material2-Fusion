import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw as throwError } from 'rxjs/observable/throw';
import { retry, catchError } from 'rxjs/operators';
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let customError = {};
          if (error.error instanceof ErrorEvent) {
            // client-side error
            customError = { 'error': error.error.message };
          } else {
            // server-side error
            const e = JSON.parse(error.error);
            customError = { 'status_code': error.status, 'error': e['message'], 'success': e['success'] };
          }
          console.log(`Error occured: ${customError['error']}`);
          return throwError(customError);
        })
      );
  }
}
