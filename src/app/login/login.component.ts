import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tryingToLogin: boolean;
  isLoginFail: boolean = false;
  user: any = {
    username: '',
    password: ''
  };
  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  getLogin() {
    this.tryingToLogin = true;
    const user: any = {'' : ''};
    setTimeout(() => {
      localStorage.setItem('currentUser', JSON.stringify( user));
      this.router.navigate(['/app'])
 }, 3000);
  }
}
