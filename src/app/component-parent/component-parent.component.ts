import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-parent',
  templateUrl: './component-parent.component.html',
  styleUrls: ['./component-parent.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentParentComponent {}
