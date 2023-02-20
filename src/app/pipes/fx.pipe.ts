import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
@Pipe({
  name: 'fx',
})
export class FxPipe implements PipeTransform {
  @memo()
  transform(value: number): number {
    const result = this.f(value);
    console.log(value + ' ' + result);
    return result;
  }
  @memo()
  private f(x: number): number {
    if (x == 1 || !x) return 1;
    return 2 * this.f(x - 1) + 3 * this.f(x - 2);
  }
}
