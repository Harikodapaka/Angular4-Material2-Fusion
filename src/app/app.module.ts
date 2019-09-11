import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './routes/app.routes';
import { LandingModule } from './landing-component/app.landing.module';
import { SubRoutingModule } from './landing-component/app.landing.routes';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpComponent } from './otp/otp.component';
import { ConfirmPwdComponent } from './confirm-pwd/confirm-pwd.component';

import { AuthGuard, AuthService, LoginGuard } from './Services/Auth/auth.service';

import 'hammerjs';
import { GoogleSigninComponent } from './login/google-sign-in.component';
import { RegisterComponent } from './register/register.component';
import { AppService } from './Services/App/app.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    OtpComponent,
    ConfirmPwdComponent,
    GoogleSigninComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SubRoutingModule,
    LandingModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      closeButton: true,
      maxOpened: 6
    })
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    AuthService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
