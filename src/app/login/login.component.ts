import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';
import { User, LoginUser } from '../Interfaces/Interfaces';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tryingToLogin: boolean;
  isLoginFail: boolean = false;
  hide: boolean = true;
  user: any = {
    username: '',
    password: ''
  };
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  getLogin() {
    this.tryingToLogin = true;
    const user: LoginUser = { email: 'chandu@gmail.com', password: '12345' };
    this.authService.login(user).subscribe( data => {
      if(data.token){
        localStorage.setItem('currentUser', JSON.stringify(data.token))
        this.router.navigate(['/app'])
      }else{
        this.tryingToLogin = false;
      }
    }, error => {
      console.log(error);
    });
  }
}
