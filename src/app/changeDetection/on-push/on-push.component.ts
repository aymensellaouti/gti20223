import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../auth/services/auth.service';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent {
  @Input() user!: User;
  @Input() name = 'test';
  i = 2;
  constructor() {
    setInterval(() => {
      this.i++;
    }, 1000);
  }
  sayCc() {
    console.log('cc');
  }
}
