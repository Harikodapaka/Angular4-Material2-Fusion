import { Injectable } from '@angular/core';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    return this.currentUser() != null;
  }

  currentUser(): any {
    const user = localStorage.getItem('currentUser');
    // tslint:disable-next-line:curly
    if (user) return JSON.parse(user);
  }

  logout(): void {
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
