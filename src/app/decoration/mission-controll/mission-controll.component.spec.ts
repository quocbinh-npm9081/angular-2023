import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionControllComponent } from './mission-controll.component';

describe('MissionControllComponent', () => {
  let component: MissionControllComponent;
  let fixture: ComponentFixture<MissionControllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionControllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
