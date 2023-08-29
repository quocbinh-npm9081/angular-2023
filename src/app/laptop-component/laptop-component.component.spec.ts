import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopComponentComponent } from './laptop-component.component';

describe('LaptopComponentComponent', () => {
  let component: LaptopComponentComponent;
  let fixture: ComponentFixture<LaptopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
