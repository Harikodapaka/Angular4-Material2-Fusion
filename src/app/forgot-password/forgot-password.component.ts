import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  never = 'never';
  constructor() { }

  ngOnInit() {
  }

}
