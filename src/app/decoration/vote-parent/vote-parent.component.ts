import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-parent',
  templateUrl: './vote-parent.component.html',
  styleUrls: ['./vote-parent.component.scss'],
})
export class VoteParentComponent {
  dartMode: boolean = false;

  onSwitchDartMode() {
    console.log('Click');

    if (this.dartMode) {
      this.dartMode = false;
    } else {
      this.dartMode = true;
    }
  }
}
