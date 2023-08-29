import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-laptop-component',
  templateUrl: './laptop-component.component.html',
  styleUrls: ['./laptop-component.component.scss'],
})
export class LaptopComponentComponent {
  @Input() name: string = '';
  @Output() closed = new EventEmitter<any>();
  close() {
    this.closed.emit({
      name: this.name,
    });
  }
}
