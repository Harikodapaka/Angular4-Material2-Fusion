import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { AuthService } from '../Services/Auth/auth.service';
import { HeaderService } from '../Services/Header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navMenu: any;

  @ViewChild('profilebar')
  private sidenav: MatSidenav;
  openProfilebar: any = false;
  router: Router;
  public currentUser = {
    fname: 'Hari',
    lname: 'Kodapaka',
    email: 'chaitanyakodapaka@gmail.com'
  }
  constructor(private snackBar: MatSnackBar,
    private authService: AuthService,
    private headerService: HeaderService,
    router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.headerService.loadMenu().then(
      data => {
        this.navMenu = data.navMenu;
      },
      err => {
        console.log("Error in Header Service:", err);

      }
    );
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
