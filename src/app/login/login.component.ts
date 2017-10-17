import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tryingToLogin: boolean;
  myInput: any;
  user: Object = {
    username: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }

  getLogin() {
    this.tryingToLogin = true;
    const user: any = {'' : ''};
    setTimeout(() => {
      localStorage.setItem('currentUser', JSON.stringify( user));
 }, 3000);
  }
}
