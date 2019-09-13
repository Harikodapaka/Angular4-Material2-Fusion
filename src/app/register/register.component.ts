import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatternValidator } from '@angular/forms';
import { AppService } from '../Services/App/app.service';
import { AuthService } from '../Services/Auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toasterService: ToastrService
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
        this.toasterService.success('User successfully registered');
        this.router.navigate(['/login']);
      }
    },
      error => {
        this.toasterService.error(error['error']);
      });
  }
}
