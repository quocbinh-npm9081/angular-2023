import {
  Component,
  Type,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { MoblieComponentComponent } from '../moblie-component/moblie-component.component';
import { LaptopComponentComponent } from '../laptop-component/laptop-component.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss'],
})
export class DynamicComponentComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  components = new Map<string, ComponentRef<any>>();
  index: number = 0;
  productNames: any = {
    mobile: 'mobile',
    laptop: 'laptop',
  };
  getComponentType(name: string): Type<any> {
    let type: Type<any> = MoblieComponentComponent;
    switch (name) {
      case this.productNames.mobile:
        type = MoblieComponentComponent;
        break;
      case this.productNames.laptop:
        type = LaptopComponentComponent;
        break;
      default:
        break;
    }
    return type;
  }
  createComponent(name: string) {
    //this.container.clear();
    const type: Type<any> = this.getComponentType(name);
    const uniqueName = name + '-' + this.index.toString();
    const component = this.container.createComponent(type);
    component.instance.name = uniqueName;
    component.instance.closed.subscribe((res: any) => {
      this.deleteComponent(res.name);
    });

    this.components.set(uniqueName, component);

    this.index++;
    console.log('Map shadow component: ', this.components);
  }
  deleteComponent(componentName: string) {
    if (this.components.has(componentName)) {
      this.components.get(componentName)?.destroy();
      this.components.delete(componentName);
    }
  }
}
