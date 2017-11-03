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

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard, AuthService } from './Services/Auth/auth.service';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

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
    LandingModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
