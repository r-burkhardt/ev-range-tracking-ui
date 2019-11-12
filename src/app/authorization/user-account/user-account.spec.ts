import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccount } from './user-account';

describe('UserAccountComponent', () => {
  let component: UserAccount;
  let fixture: ComponentFixture<UserAccount>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccount ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
