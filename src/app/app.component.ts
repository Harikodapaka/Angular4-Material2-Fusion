import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/Auth/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  router: Router;
  constructor(router: Router, public authService: AuthService) {
    this.router = router;
  }
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }
}
