import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionTableComponent } from './promotion-table/promotion-table.component';
import { PromotionInfoComponent } from './promotion-info/promotion-info.component';



@NgModule({
  declarations: [PromotionTableComponent, PromotionInfoComponent],
  imports: [
    CommonModule
  ]
})
export class PromotionManagementModule { }
