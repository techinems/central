import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionInfoComponent } from './promotion-info.component';

describe('PromotionInfoComponent', () => {
  let component: PromotionInfoComponent;
  let fixture: ComponentFixture<PromotionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
