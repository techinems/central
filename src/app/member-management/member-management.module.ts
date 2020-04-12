import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MemberManagementServiceService } from '../services/member-management-service.service';

import { MemberTableComponent } from './member-table/member-table.component';
import { MemberInfoComponent } from './member-info/member-info.component';
import { NewMemberComponent } from './new-member/new-member.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastNotificationsModule } from "ngx-toast-notifications";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const MemberManagemenRoutes: Routes = [
  { path: 'member-management',  component: MemberTableComponent },
  { path: 'member-info',  component: MemberInfoComponent },
  { path: 'new-member',  component: NewMemberComponent },
];


@NgModule({
  declarations: [
    MemberTableComponent,
    MemberInfoComponent,
    NewMemberComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ToastNotificationsModule,
    BsDatepickerModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(MemberManagemenRoutes)
  ],
  providers:[
    MemberManagementServiceService,
    HttpClientModule
  ],
  exports: [
    MemberTableComponent,
    RouterModule,
  ]
})
export class MemberManagementModule { }
