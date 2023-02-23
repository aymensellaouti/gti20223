import { TestBed } from '@angular/core/testing';

import { LoadCvGuard } from './load-cv.guard';

describe('LoadCvGuard', () => {
  let guard: LoadCvGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadCvGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
