import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoblieComponentComponent } from './moblie-component.component';

describe('MoblieComponentComponent', () => {
  let component: MoblieComponentComponent;
  let fixture: ComponentFixture<MoblieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoblieComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoblieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
