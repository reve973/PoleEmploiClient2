import { TestBed } from '@angular/core/testing';

import { CandidatureService } from './candidature.service';

describe('CandidatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidatureService = TestBed.get(CandidatureService);
    expect(service).toBeTruthy();
  });
});
