import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationChildrenComponent } from './multiplication-children.component';

describe('MultiplicationChildrenComponent', () => {
  let component: MultiplicationChildrenComponent;
  let fixture: ComponentFixture<MultiplicationChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicationChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplicationChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
