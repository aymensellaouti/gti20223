import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';
import { LoggerService } from './logger.service';

let loggerSpy: jasmine.Spy;
let mathService: MathService;
let loggerService: LoggerService;

fdescribe('MathService', () => {
  beforeEach(() => {
    /* loggerSpy = jasmine.createSpyObj('LoggerService', ['logger']); */
    loggerService = new LoggerService();
    loggerSpy = spyOn(loggerService, 'logger');
    mathService = new MathService(loggerService);
  });
  it('should be created', () => {
    expect(mathService).toBeTruthy();
  });

  it('should Add two numbers', () => {
    expect(mathService.add(2, 3)).toBe(5);
    expect(loggerSpy.calls.count()).toBe(1);
    expect(loggerSpy.calls.argsFor(0)).toEqual(['2 + 3 = 5']);
  });
  it('should Substract two numbers', () => {
    expect(mathService.substract(2, 3)).toBe(-1);
  });
});
