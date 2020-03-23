import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CoreService } from './services/core-service.service';
import { MemberManagementServiceService } from './services/member-management-service.service';

import { AppRoutingModule } from './app-routing.module';
import { MemberManagementModule } from './member-management/member-management.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NightCrewsComponent } from './night-crews/night-crews.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainingChecklistComponent } from './training-checklist/training-checklist.component';
import { TrainingEvaluationComponent } from './training-evaluation/training-evaluation.component';
import { RedirectCardComponent } from './redirect-card/redirect-card.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NightCrewsComponent,
    DashboardComponent,
    TrainingChecklistComponent,
    TrainingEvaluationComponent,
    RedirectCardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemberManagementModule,
    HttpClientModule,
  ],
  providers: [
    CoreService,
    MemberManagementServiceService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
