import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChargeSession } from './add-edit-charge-session';

describe('AddEditViewChargeSessionComponent', () => {
  let component: AddEditChargeSession;
  let fixture: ComponentFixture<AddEditChargeSession>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditChargeSession ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditChargeSession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
