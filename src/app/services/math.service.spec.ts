import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

fdescribe('MathService', () => {
  let service: MathService = new MathService();

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
