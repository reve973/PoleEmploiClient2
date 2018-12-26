import { TestBed } from '@angular/core/testing';

import { OffreMockService } from './offre-mock.service';

describe('OffreMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OffreMockService = TestBed.get(OffreMockService);
    expect(service).toBeTruthy();
  });
});
