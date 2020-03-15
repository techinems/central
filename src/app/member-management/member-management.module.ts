import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { MemberManagementServiceService } from '../services/member-management-service.service';

import { MemberTableComponent } from './member-table/member-table.component';
import { MemberInfoComponent } from './member-info/member-info.component';


const MemberManagemenRoutes: Routes = [
  { path: 'member-management',  component: MemberTableComponent },
  { path: 'member-info',  component: MemberInfoComponent },
];

@NgModule({
  declarations: [
    MemberTableComponent,
    MemberInfoComponent,
  ],
  imports: [
    NgSelectModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(MemberManagemenRoutes)
  ],
  providers:[
    MemberManagementServiceService
  ],
  exports: [
    MemberTableComponent,
    RouterModule,
  ]
})
export class MemberManagementModule { }
