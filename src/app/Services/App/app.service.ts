import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  getSterength(pwd: any) {
    if (pwd) {
      return pwd.length < 5 ? 'Week' : pwd.length < 9 ? 'Medium' : 'Strong';
    }
    return '**';
  }
  matchPwd(pwd: any, cpwd: any) {
    if (pwd && cpwd) {
      if (pwd === cpwd) {
        return true;
      }
    }
    return false;
  }
}
