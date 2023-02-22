import { TestBed } from '@angular/core/testing';

import { CanLeaveTodoGuard } from './can-leave-todo.guard';

describe('CanLeaveTodoGuard', () => {
  let guard: CanLeaveTodoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLeaveTodoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
