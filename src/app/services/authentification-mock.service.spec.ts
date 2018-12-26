import { TestBed } from '@angular/core/testing';

import { AuthentificationMockService } from './authentification-mock.service';

describe('AuthentificationMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentificationMockService = TestBed.get(AuthentificationMockService);
    expect(service).toBeTruthy();
  });
});
