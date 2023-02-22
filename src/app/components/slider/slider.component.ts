import { Component, Input, OnInit } from '@angular/core';
import { Observable, timer, map, take } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() paths: string[] = [
    '404.png',
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  @Input() timer = 1000;
  @Input() size = 150;

  imagesSlider$!: Observable<any>;
  constructor() {}
  ngOnInit() {
    this.imagesSlider$ = timer(0, this.timer).pipe(
      map((index) => this.paths[index % this.paths.length]),
      take(3)
    );
  }
}
