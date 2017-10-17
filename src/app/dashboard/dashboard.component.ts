import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSidenav } from '@angular/material';
import { AuthService } from '../Services/Auth/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('profilebar')
  private sidenav: MatSidenav;
  openProfilebar: any = false;
  constructor(private snackBar: MatSnackBar, private authService: AuthService) { }

  ngOnInit() {
  }
  openProfileBar() {
    setTimeout(() => {
      this.sidenav.open();
    }, 250);
  }
  openSnackBar() {
    this.snackBar.open('Hi there', 'close', {
      duration: 2000,
    });
  }
  doLogout() {
   this.authService.logout();
   location.reload();
  }
}
