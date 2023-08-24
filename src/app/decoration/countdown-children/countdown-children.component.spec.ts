import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownChildrenComponent } from './countdown-children.component';

describe('CountdownChildrenComponent', () => {
  let component: CountdownChildrenComponent;
  let fixture: ComponentFixture<CountdownChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
