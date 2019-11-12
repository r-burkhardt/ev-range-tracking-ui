import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeSessions } from './charge-sessions';

describe('ChargeSessionsComponent', () => {
  let component: ChargeSessions;
  let fixture: ComponentFixture<ChargeSessions>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeSessions ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeSessions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
