import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPwdComponent } from './confirm-pwd.component';

describe('ConfirmPwdComponent', () => {
  let component: ConfirmPwdComponent;
  let fixture: ComponentFixture<ConfirmPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
