import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown-children',
  templateUrl: './countdown-children.component.html',
  styleUrls: ['./countdown-children.component.scss'],
})
export class CountdownChildrenComponent {
  count: number = 0;
  increase(num: number): void {
    this.count = this.count + num;
  }
  decrease(num: number): void {
    this.count = this.count - num;
  }
}
