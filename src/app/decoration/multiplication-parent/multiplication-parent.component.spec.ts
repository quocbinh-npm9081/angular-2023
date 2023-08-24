import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationParentComponent } from './multiplication-parent.component';

describe('MultiplicationParentComponent', () => {
  let component: MultiplicationParentComponent;
  let fixture: ComponentFixture<MultiplicationParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicationParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplicationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
