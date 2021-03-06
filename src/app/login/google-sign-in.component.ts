import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../Services/Auth/auth.service';
import { Router } from '@angular/router';
declare const gapi: any;

@Component({
    selector: 'app-google-signin',
    template: `<button type="button" id="googleBtn" mat-raised-button color="warn" class="m-2 w-75">Sign in with Google</button>`
})
export class GoogleSigninComponent implements AfterViewInit {

    private clientId = '2387600941-5u5j008fesmdksobv31dobtv0cs1pv9e.apps.googleusercontent.com';

    private scope = [
        'profile',
        'email'
    ].join(' ');

    public auth2: any;

    constructor(private element: ElementRef,
        private toastrService: ToastrService,
        private authService: AuthService,
        private router: Router) {
        console.log('ElementRef: ', this.element);
    }
    ngAfterViewInit() {
        this.googleInit();
    }

    public googleInit() {
        const that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: that.clientId,
                cookiepolicy: 'single_host_origin',
                scope: that.scope
            });
            that.attachSignin(that.element.nativeElement.firstChild);
        });
    }
    public attachSignin(element) {
        const that = this;
        this.auth2.attachClickHandler(element, {},
            function (googleUser) {
                const token = googleUser.getAuthResponse().access_token;
                that.authService.googleSignin(token).subscribe(data => {
                    if (data.token) {
                        localStorage.setItem('currentUser', JSON.stringify(data.token));
                        window.location.href = `${window.location.origin}/#/app`;
                        // that.router.navigate(['/app/']);
                    }
                });

            }, function (error) {
                console.log(JSON.stringify(error, undefined, 2));
                that.toastrService.error(error.error);
            });
    }
    public disconnect() {
        // Revoke the access token.
        this.auth2.disconnect();
    }
}
