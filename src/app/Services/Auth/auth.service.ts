import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { User, LoginUser, RegisterUser, BasicResponse } from '../../Interfaces/Interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare const gapi: any;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  private clientId = '2387600941-5u5j008fesmdksobv31dobtv0cs1pv9e.apps.googleusercontent.com';
  private scope = [
    'profile',
    'email'
].join(' ');
  isLoggedIn(): boolean {
    return this.currentUser() != null;
  }

  currentUser(): any {
    const user = localStorage.getItem('currentUser');
    // tslint:disable-next-line:curly
    if (user) return JSON.parse(user);
  }
  register(user: RegisterUser): Observable<BasicResponse> {
    return this.http
      .post(`${environment.apiBaseUrl}/auth/register`, user, httpOptions)
      .map(response => response as BasicResponse);
  }
  login(user: LoginUser): Observable<User> {
    return this.http
      .post(`${environment.apiBaseUrl}/auth/login`, user, httpOptions)
      .map(response => response['user'] as User);
  }
  googleSignin(token: any): Observable<any> {
    const body = { 'access_token': token };
    return this.http
      .post(`${environment.apiBaseUrl}/auth/google`, body, httpOptions)
      .map(response => response['user'] as User);
  }
  logout(): void {
    const that = this;
    if (gapi) {
      const auth2 = gapi.auth2.getAuthInstance();
      console.log(auth2);
        auth2.signOut().then(function () {
            auth2.disconnect();
        });
    }
    localStorage.clear();
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
