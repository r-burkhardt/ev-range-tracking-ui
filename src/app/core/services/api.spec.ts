import { TestBed } from '@angular/core/testing';

import { Api } from './api';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Api = TestBed.get(Api);
    expect(service).toBeTruthy();
  });
});
