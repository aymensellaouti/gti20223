import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

fdescribe('MathService', () => {
  let service: MathService = new MathService();

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Add two numbers', () => {
    expect(service.add(2, 3)).toBe(5);
  });
  it('should Substract two numbers', () => {
    expect(service.substract(2, 3)).toBe(-1);
  });
});
