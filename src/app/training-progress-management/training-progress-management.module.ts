import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TrainingManagementService } from '../services/training-management.service';

import { TrainingProgressTableComponent } from './training-progress-table/training-progress-table.component';
import { TrainingProgressInfoComponent } from './training-progress-info/training-progress-info.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastNotificationsModule } from "ngx-toast-notifications";

const TrainingProgressManagemenRoutes: Routes = [
  { path: 'trainee-progress-management',  component: TrainingProgressTableComponent },
  { path: 'trainee-progress-info',  component: TrainingProgressInfoComponent },
];

@NgModule({
  declarations: [
    TrainingProgressTableComponent, 
    TrainingProgressInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastNotificationsModule,    
    CommonModule,
    RouterModule.forRoot(TrainingProgressManagemenRoutes)    
  ],
  providers:[
    TrainingManagementService,
    HttpClientModule
  ], 
  exports: [
    TrainingProgressTableComponent,
    RouterModule,
  ]  
})
export class TrainingProgressManagementModule { }
