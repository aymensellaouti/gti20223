import { Component } from '@angular/core';
@Component({
  selector: 'app-test-pure-pipe',
  templateUrl: './test-pure-pipe.component.html',
  styleUrls: ['./test-pure-pipe.component.css'],
})
export class TestPurePipeComponent {
  message = '';
  numberArray: number[] = [1, 2];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.numberArray.push(this.getRandNumberInInterval(20, 30));
    }
  }

  getRandNumberInInterval(min: number, max: number): number {
    return Math.ceil(Math.random() * (max - min)) + min;
  }
}
