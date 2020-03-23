import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastNotificationsModule } from "ngx-toast-notifications";
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewCredentialComponent } from './new-credential/new-credential.component';
import { CredentialInfoComponent } from './credential-info/credential-info.component';
import { CredentialTableComponent } from './credential-table/credential-table.component';

const CredentialManagementRoute: Routes = [
  { path: 'credential-management',  component: CredentialTableComponent },
  { path: 'credential-info',  component: CredentialInfoComponent },
  { path: 'new-credential',  component: NewCredentialComponent }
];

@NgModule({
  declarations: [
    NewCredentialComponent, 
    CredentialInfoComponent, 
    CredentialTableComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastNotificationsModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,   
    RouterModule.forRoot(CredentialManagementRoute) 
  ],
  providers:[
    HttpClientModule
  ],
  exports:[
    RouterModule,
  ]
})
export class CredentialManagementModule { }
