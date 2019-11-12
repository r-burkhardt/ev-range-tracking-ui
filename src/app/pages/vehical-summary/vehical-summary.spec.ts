import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalSummary } from './vehical-summary';

describe('VehicalSummaryComponent', () => {
  let component: VehicalSummary;
  let fixture: ComponentFixture<VehicalSummary>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicalSummary ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
