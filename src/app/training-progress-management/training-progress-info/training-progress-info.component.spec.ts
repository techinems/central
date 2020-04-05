import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingProgressInfoComponent } from './training-progress-info.component';

describe('TrainingProgressInfoComponent', () => {
  let component: TrainingProgressInfoComponent;
  let fixture: ComponentFixture<TrainingProgressInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingProgressInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingProgressInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
