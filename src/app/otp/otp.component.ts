import { Component, OnInit } from '@angular/core';
import { NgForm, PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  always = 'always';
  otp: String;
  constructor() { }

  ngOnInit() {
  }

}
