import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './routes/app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';

import { AuthGuard, AuthService } from './Services/Auth/auth.service';
import { HeaderService } from './Services/Header/header.service'

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard, AuthService, HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
