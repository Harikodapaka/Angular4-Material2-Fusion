import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


import { AuthService, AuthGuard } from '../Services/Auth/auth.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
   { path: 'login', component: AppComponent },
   { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
