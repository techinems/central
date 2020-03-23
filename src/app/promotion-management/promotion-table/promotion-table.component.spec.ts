import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionTableComponent } from './promotion-table.component';

describe('PromotionTableComponent', () => {
  let component: PromotionTableComponent;
  let fixture: ComponentFixture<PromotionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
