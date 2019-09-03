import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { OtpComponent } from '../otp/otp.component';
import { ConfirmPwdComponent } from '../confirm-pwd/confirm-pwd.component';
import { LoginGuard } from '../Services/Auth/auth.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'forgotPassword', component: ForgotPasswordComponent, canActivate: [LoginGuard] },
  { path: 'OTP', component: OtpComponent, canActivate: [LoginGuard] },
  { path: 'confirmPassword', component: ConfirmPwdComponent, canActivate: [LoginGuard] }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
