import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSidenav } from '@angular/material';
import { AuthService } from '../Services/Auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('profilebar')
  private sidenav: MatSidenav;
  openProfilebar: any = false;
  constructor(private snackBar: MatSnackBar, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  openProfileBar() {
    setTimeout(() => {
      this.sidenav.open();
    }, 250);
  }
  openSnackBar() {
    this.toastr.success('everything is fine');
    this.toastr.error('everything is fine ');
    this.toastr.info('everything is fine info');
    this.toastr.warning('everything is fine warn');
    this.snackBar.open('Hi there', 'close', {
      duration: 2000,
    });
  }
  doLogout() {
   this.authService.logout();
   location.reload();
  }
}
