import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgForm, PatternValidator} from '@angular/forms';

@Component({
  selector: 'app-confirm-pwd',
  templateUrl: './confirm-pwd.component.html',
  styleUrls: ['./confirm-pwd.component.scss']
})
export class ConfirmPwdComponent implements OnInit {
  always = 'always';
  hide= true;
  auth ={
    pwd:'',
    cpwd:''
  };
  constructor() { }

  ngOnInit() {
  }
  getstringth(){
    if(this.auth.pwd){
      return this.auth.pwd.length < 5? 'Week' : this.auth.pwd.length < 9 ? 'Medium': 'Strong'
    }
    return '**'
  }
  matchPwd(){
    if(this.auth.pwd && this.auth.cpwd){
      if(this.auth.pwd === this.auth.cpwd){
        return true;
      }
    }
    return false;
  }
}
