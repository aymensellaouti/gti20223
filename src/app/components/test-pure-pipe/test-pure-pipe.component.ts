import { Component } from '@angular/core';

@Component({
  selector: 'app-test-pure-pipe',
  templateUrl: './test-pure-pipe.component.html',
  styleUrls: ['./test-pure-pipe.component.css'],
})
export class TestPurePipeComponent {
  message = '';
  numberArray: number[] = [1, 2];

  calculer(x: number) {
    console.log(x);
    const result = this.f(x);
    return result;
  }

  private f(x: number) {
    return 1;
  }
}
