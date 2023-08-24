import {
  Component,
  ViewChild,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';
import { MultiplicationChildrenComponent } from '../multiplication-children/multiplication-children.component';
@Component({
  selector: 'app-multiplication-parent',
  templateUrl: './multiplication-parent.component.html',
  styleUrls: ['./multiplication-parent.component.scss'],
})
export class MultiplicationParentComponent implements AfterViewInit {
  @ViewChild(MultiplicationChildrenComponent)
  private _children!: MultiplicationChildrenComponent;

  ngAfterViewInit(): void {
    console.log(this._children);
  }
  muliplication() {
    this._children.increase(2);
  }
}
