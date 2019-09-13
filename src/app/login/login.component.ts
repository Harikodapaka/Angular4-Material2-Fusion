import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';
import { LoginUser } from '../Interfaces/Interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tryingToLogin: boolean;
  isLoginFail = false;
  hide = true;
  user: LoginUser = {
    email: '',
    password: ''
  };
  constructor(private router: Router,
    private authService: AuthService,
    private tosterService: ToastrService
  ) { }

  ngOnInit() {
  }

  getLogin() {
    this.tryingToLogin = true;
    this.authService.login(this.user).subscribe(data => {
      if (data.token) {
        localStorage.setItem('currentUser', JSON.stringify(data.token));
        this.router.navigate(['/app']);
      } else {
        this.tryingToLogin = false;
      }
    }, error => {
      this.tosterService.error(error['error']);
      this.tryingToLogin = false;
    });
  }
}
