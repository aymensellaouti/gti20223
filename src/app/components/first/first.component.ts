import { Component } from '@angular/core';
import { User } from '../../auth/services/auth.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name = 'aymen';
  message = '';
  isHidden = false;
  user!: User;
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
  showHide() {
    this.isHidden = !this.isHidden;
  }
  constructor() {
    /*     setInterval(() => {

    }, 1000); */
    this.user = new User(1, 'aymen');
    
  }
}
