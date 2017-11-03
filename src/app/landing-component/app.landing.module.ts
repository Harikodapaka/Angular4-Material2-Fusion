import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard, AuthService } from '../Services/Auth/auth.service';
import { HeaderService } from '../Services/Header/header.service';
import { MaterialModule } from '../material/material.module';
import { UserComponent } from '../user/user.component';
import { SettingsComponent } from '../settings/settings.component';
import { SubRoutingModule } from './app.landing.routes';
import { LandingComponent } from '../landing-component/landing.component';

@NgModule({
    imports: [
        SubRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        DashboardComponent,
        UserComponent,
        LandingComponent,        
        SettingsComponent,
    ],
    exports: [
    ],
    providers: [AuthGuard, AuthService, HeaderService],
    bootstrap: []
})
export class LandingModule { }