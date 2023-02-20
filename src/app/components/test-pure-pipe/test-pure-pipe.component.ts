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

  }

  getRandNumberInInterval(min: number, max: number): number {
    return Math.ceil((Math.random() * (max - min))) + min;
  }
  /**
   *
   * PErmet de calucler f et de l'afficher
   *
   * @param x
   * @returns
   */
  calculer(x: number) {
    console.log(x);
    const result = this.f(x);
    return result;
  }

  private f(x: number) {
    /* todo complete f */
    return 1;
  }
}
