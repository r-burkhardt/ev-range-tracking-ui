import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EVTable } from './ev-table';

describe('EvTableComponent', () => {
  let component: EVTable;
  let fixture: ComponentFixture<EVTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EVTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EVTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
