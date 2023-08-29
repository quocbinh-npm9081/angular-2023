import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-moblie-component',
  templateUrl: './moblie-component.component.html',
  styleUrls: ['./moblie-component.component.scss'],
})
export class MoblieComponentComponent implements OnInit {
  @Input() name: string = '';
  @Output() closed = new EventEmitter<any>();
  ngOnInit(): void {
    console.log('Method not implemented.');
  }
  close() {
    this.closed.emit({
      name: this.name,
    });
  }
}
