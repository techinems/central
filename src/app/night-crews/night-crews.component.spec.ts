import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightCrewsComponent } from './night-crews.component';

describe('NightCrewsComponent', () => {
  let component: NightCrewsComponent;
  let fixture: ComponentFixture<NightCrewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightCrewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightCrewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
