import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';

import { AuthService, AuthGuard } from '../Services/Auth/auth.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full'},
   { path: 'login', component: LoginComponent },
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
