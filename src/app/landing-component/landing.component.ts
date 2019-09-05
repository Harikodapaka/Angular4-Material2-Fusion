import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { AuthService } from '../Services/Auth/auth.service';
import { HeaderService } from '../Services/Header/header.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  navMenu: any;
  router: Router;
  search_query: String;

  @ViewChild('profilebar')
  private sidenav: MatSidenav;
  openProfilebar: any = false;

  public currentUser = {
    fname: 'Hari',
    lname: 'Kodapaka',
    email: 'chaitanyakodapaka@gmail.com'
  };
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
        console.log('Error in Header Service:', err);

      }
    );
  }
  searchQuery() {
    console.log('Searched Querry is:', this.search_query);
  }
  openProfileBar() {
    setTimeout(() => {
      this.sidenav.open();
    }, 250);
  }
  closeProfileBar() {
    setTimeout(() => {
      this.sidenav.close();
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
  isMobile() {
    return window.innerWidth < 490;
  }
  isTab() {
    return window.innerWidth < 1000;
  }
  getPageName() {
    return 'Dashboard';
  }

}
