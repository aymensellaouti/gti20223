import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor() {}
  add(x: number, y: number): number {
    /*     this.logger.logger(`${x} + ${y} = ${x + y}`); */
    return x + y;
  }
  substract(x: number, y: number): number {
    /*     this.logger.logger(`${x} - ${y} = ${x - y} `);
     */ return x - y;
  }
}
