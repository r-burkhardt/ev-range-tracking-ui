import { TestBed } from '@angular/core/testing';

import { VehicleApi } from './vehicle-api';

describe('VehicleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleApi = TestBed.get(VehicleApi);
    expect(service).toBeTruthy();
  });
});
