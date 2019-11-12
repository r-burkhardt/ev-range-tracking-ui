import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewChargeSession } from './add-edit-view-charge-session';

describe('AddEditViewChargeSessionComponent', () => {
  let component: AddEditViewChargeSession;
  let fixture: ComponentFixture<AddEditViewChargeSession>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditViewChargeSession ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditViewChargeSession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
