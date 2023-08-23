import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteParentComponent } from './vote-parent.component';

describe('VoteParentComponent', () => {
  let component: VoteParentComponent;
  let fixture: ComponentFixture<VoteParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
