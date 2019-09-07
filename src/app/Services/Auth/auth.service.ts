import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { User, LoginUser } from '../../Interfaces/Interfaces';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ToastrService } from 'ngx-toastr';
declare const gapi: any;

@Injectable()
export class AuthService {
  constructor(private http: Http,
    private toastrService: ToastrService) {}

  isLoggedIn(): boolean {
    return this.currentUser() != null;
  }

  currentUser(): any {
    const user = localStorage.getItem('currentUser');
    // tslint:disable-next-line:curly
    if (user) return JSON.parse(user);
  }

  login(user: LoginUser): Observable<User> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    const options = new RequestOptions({headers: headers});

    return this.http
      .post(`${environment.apiBaseUrl}/auth/login`, user, options)
      .map(response => response.json().user as User)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }
  googleSignin(token: any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    const options = new RequestOptions({headers: headers});
    let body = {'access_token': token}
    return this.http
      .post(`${environment.apiBaseUrl}/auth/google`, body, options)
      .map(response => response.json().user as User)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }
  logout(): void {
    localStorage.clear();
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log(this.auth2);
      
      console.log('User signed out.');
    });
  }
  errorHandler(err: any): void {
    const error = err.json();
    this.toastrService.error(error.message);
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  canLoad(route: Route): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    return false;
  }
}
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return (this.authService.isLoggedIn()) ? false : true;
  }
  canLoad(route: Route): boolean {
    return (this.authService.isLoggedIn()) ? false : true;
  }

}
