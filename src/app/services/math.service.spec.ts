import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

let loggerSpy;
let mathService: MathService;

fdescribe('MathService', () => {
  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['logger']);
    mathService = new MathService(loggerSpy);
  });
  it('should be created', () => {
    expect(mathService).toBeTruthy();
  });

  it('should Add two numbers', () => {
    expect(mathService.add(2, 3)).toBe(5);
  });
  it('should Substract two numbers', () => {
    expect(mathService.substract(2, 3)).toBe(-1);
  });
});
