import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastNotificationsModule } from "ngx-toast-notifications";

import { TrainingManagementService } from '../services/training-management.service';
import { ProfileComponent } from './profile/profile.component';

const PersonalProfileRoutes: Routes = [
  { path: 'member-profile',  component: ProfileComponent },
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastNotificationsModule,    
    CommonModule,
    RouterModule.forRoot(PersonalProfileRoutes) 
  ],
  providers:[
    TrainingManagementService,
    HttpClientModule
  ], 
  exports: [
    ProfileComponent,
    RouterModule,
  ]      

})
export class PersonalProfileModule { }
