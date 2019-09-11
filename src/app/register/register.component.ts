import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatternValidator } from '@angular/forms';
import { AppService } from '../Services/App/app.service';
import { AuthService } from '../Services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  always = 'always';
  hide = true;
  auth = {
    email: '',
    password: '',
    confirm_password: ''
  };
  constructor(private appService: AppService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  getstringth() {
    return this.appService.getSterength(this.auth.password);
  }
  matchPwd() {
    return this.appService.matchPwd(this.auth.password, this.auth.confirm_password);
  }
  register() {
    this.authService.register(this.auth).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/login']);
      }
    },
      error => {
        console.log(`error occured in register() - ${JSON.stringify(error)}`);
      })
  }
}
