import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-parent',
  templateUrl: './component-parent.component.html',
  styleUrls: ['./component-parent.component.scss'],
})
export class ComponentParentComponent {
  // ngOnInit(): void {
  //   console.log('onInit run');
  // }
  //states
  //userName: any = ['binh']; //useState
  userName: any = 'binh'; //useState
  //methods
  // updateUser = () => this.userName.push('An');
  updateUser = () => (this.userName = 'An');
}
