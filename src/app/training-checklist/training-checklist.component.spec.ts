import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingChecklistComponent } from './training-checklist.component';

describe('TrainingChecklistComponent', () => {
  let component: TrainingChecklistComponent;
  let fixture: ComponentFixture<TrainingChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
