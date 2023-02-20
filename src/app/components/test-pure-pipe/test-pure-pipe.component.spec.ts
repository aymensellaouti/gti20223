import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPurePipeComponent } from './test-pure-pipe.component';

describe('TestPurePipeComponent', () => {
  let component: TestPurePipeComponent;
  let fixture: ComponentFixture<TestPurePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPurePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPurePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
