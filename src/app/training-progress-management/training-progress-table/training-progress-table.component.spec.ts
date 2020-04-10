import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingProgressTableComponent } from './training-progress-table.component';

describe('TrainingProgressTableComponent', () => {
  let component: TrainingProgressTableComponent;
  let fixture: ComponentFixture<TrainingProgressTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingProgressTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingProgressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
