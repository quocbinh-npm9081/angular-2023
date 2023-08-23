import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.scss'],
})
export class HeroParentComponent {
  public heros = ['Binh', 'An'];
  public master = 'Louisq';
}
