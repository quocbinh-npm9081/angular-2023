import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplication-children',
  templateUrl: './multiplication-children.component.html',
  styleUrls: ['./multiplication-children.component.scss'],
})
export class MultiplicationChildrenComponent {
  count: number = 2;
  increase(num: number): void {
    this.count = this.count * num;
  }
}
