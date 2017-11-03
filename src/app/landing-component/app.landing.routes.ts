import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Services/Auth/auth.service';
import { LandingComponent } from '../landing-component/landing.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SettingsComponent } from '../settings/settings.component';
const subRoutes: Routes = [
    {
        path: 'app',
        component: LandingComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '', component: DashboardComponent
            },
            {
                path: 'dashboard', component: DashboardComponent
            }
        ]
    }];

@NgModule({
    imports: [
        RouterModule.forRoot(subRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class SubRoutingModule { }
