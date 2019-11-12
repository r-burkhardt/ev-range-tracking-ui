import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfile } from './user-profile';

describe('UserProfileComponent', () => {
  let component: UserProfile;
  let fixture: ComponentFixture<UserProfile>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfile ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
