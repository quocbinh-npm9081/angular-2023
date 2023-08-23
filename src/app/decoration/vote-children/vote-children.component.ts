import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-children',
  templateUrl: './vote-children.component.html',
  styleUrls: ['./vote-children.component.scss'],
})
export class VoteChildrenComponent {
  @Input() dartMode: any;
  @Output() onSwitch = new EventEmitter<void>();

  onClick() {
    this.onSwitch.emit();
  }
}
