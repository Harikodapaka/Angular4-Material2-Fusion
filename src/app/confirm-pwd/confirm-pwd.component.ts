import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgForm, PatternValidator } from '@angular/forms';
import { AppService } from '../Services/App/app.service';

@Component({
  selector: 'app-confirm-pwd',
  templateUrl: './confirm-pwd.component.html',
  styleUrls: ['./confirm-pwd.component.scss']
})
export class ConfirmPwdComponent implements OnInit {
  always = 'always';
  hide = true;
  auth = {
    pwd: '',
    cpwd: ''
  };
  constructor(private appService: AppService) { }

  ngOnInit() {
  }
  getstringth() {
    return this.appService.getSterength(this.auth.pwd);
  }
  matchPwd() {
    return this.appService.matchPwd(this.auth.pwd, this.auth.cpwd);
  }
}
