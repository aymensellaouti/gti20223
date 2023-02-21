import { TestBed } from '@angular/core/testing';

import { DetailCvResolver } from './detail-cv.resolver';

describe('DetailCvResolver', () => {
  let resolver: DetailCvResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DetailCvResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
