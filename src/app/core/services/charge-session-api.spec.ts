import { TestBed } from '@angular/core/testing';

import { ChargeSessionApi } from './charge-session-api';

describe('ChargeSessionApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChargeSessionApi = TestBed.get(ChargeSessionApi);
    expect(service).toBeTruthy();
  });
});
