import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.scss'],
})
export class HeroChildComponent {
  @Input() heros!: any;

  @Input('master')
  get master() {
    return this._master;
  }
  set master(master: string) {
    this._master = master;
  }
  private _master = '';
}
