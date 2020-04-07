import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PromotionManagementService } from '../services/promotion-management.service';

import { PromotionTableComponent } from './promotion-table/promotion-table.component';
import { PromotionInfoComponent } from './promotion-info/promotion-info.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { ToastNotificationsModule } from "ngx-toast-notifications";

const PromotionManagemenRoutes: Routes = [
  { path: 'promotion-management',  component: PromotionTableComponent },
  { path: 'promotion-info',  component: PromotionInfoComponent },
];

@NgModule({
  declarations: [
    PromotionTableComponent, 
    PromotionInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    UiSwitchModule,
    ToastNotificationsModule,    
    CommonModule,
    RouterModule.forRoot(PromotionManagemenRoutes)    
  ],
  providers:[
    PromotionManagementService,
    HttpClientModule
  ], 
  exports: [
    PromotionTableComponent,
    RouterModule,
  ]    

})
export class PromotionManagementModule { }
