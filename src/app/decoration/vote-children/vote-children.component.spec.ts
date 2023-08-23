import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteChildrenComponent } from './vote-children.component';

describe('VoteChildrenComponent', () => {
  let component: VoteChildrenComponent;
  let fixture: ComponentFixture<VoteChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
