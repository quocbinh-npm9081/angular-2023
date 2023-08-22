import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  ViewChild,
  AfterContentInit,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-component-children',
  templateUrl: './component-children.component.html',
  styleUrls: ['./component-children.component.scss'],
})
export class ComponentChildrenComponent
  implements OnChanges, DoCheck, AfterContentInit
{
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') contentWrapper!: ElementRef;
  ngDoCheck(): void {
    // Thực hiện các hành động theo dõi và phản ứng khi có thay đổi
    console.log('Component checked for changes');
  }
  //props
  @Input() userName = '';

  ngOnChanges(changes: SimpleChanges) {
    //componentDidMount
    //ngOnChange chi lắng nghe các kiểu dữ liệu tham trị, các kiểu dữ liệu tham chiếu như (Obj và Arry - khi bạn them 1 phần tử vào Arr thì arr vẫn là arr đó nó không thay đổi ô nhớ)
    console.log('ngOnChanges: ', changes);
  }

  ngAfterContentInit(): void {
    console.log('wrapper: ', this.wrapper!);
    console.log('contentWrapper: ', this.contentWrapper!);
  }
}