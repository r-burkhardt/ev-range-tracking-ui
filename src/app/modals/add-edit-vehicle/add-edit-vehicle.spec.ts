import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVehicle } from './add-edit-vehicle';

describe('AddEditVehicleComponent', () => {
  let component: AddEditVehicle;
  let fixture: ComponentFixture<AddEditVehicle>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditVehicle ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditVehicle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
