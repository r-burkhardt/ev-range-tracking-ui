import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Logout } from './logout';

describe('LogoutComponent', () => {
  let component: Logout;
  let fixture: ComponentFixture<Logout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Logout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Logout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
