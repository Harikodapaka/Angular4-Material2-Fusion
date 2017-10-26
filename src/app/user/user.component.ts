import { Component, OnInit, Input, Injector } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: any;
  headerCmp: any;
  constructor(private injector: Injector) { }

  ngOnInit() {
    this.headerCmp = this.injector.get(HeaderComponent);
  }

}
