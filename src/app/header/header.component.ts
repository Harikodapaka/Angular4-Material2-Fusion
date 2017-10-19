import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { AuthService } from '../Services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('profilebar')
  private sidenav: MatSidenav;
  openProfilebar: any = false;
  router: Router;
  private currentUser={
    fname:'Hari',
    lname:'Kodapaka',
    email:'chaitanyakodapaka@gmail.com'
  }
  constructor(private snackBar: MatSnackBar, private authService: AuthService, router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }
  openProfileBar() {
    setTimeout(() => {
      this.sidenav.open();
    }, 250);
  }
  openSnackBar() {
    this.snackBar.open('hey now', 'close', {
      duration: 2000,
    });
  }
  doLogout() {
   this.authService.logout();
   this.router.navigate(['/login']);
  }
}
