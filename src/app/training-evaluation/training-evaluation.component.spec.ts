import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingEvaluationComponent } from './training-evaluation.component';

describe('TrainingEvaluationComponent', () => {
  let component: TrainingEvaluationComponent;
  let fixture: ComponentFixture<TrainingEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
