import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreService } from './services/core-service.service';
import { ApiService } from './services/api.service';
import { MemberManagementServiceService } from './services/member-management-service.service';
import { CredentialManagementService } from './services/credential-management.service';

import { AppRoutingModule } from './app-routing.module';
import { MemberManagementModule } from './member-management/member-management.module';
import { CredentialManagementModule } from './credential-management/credential-management.module';
import { PromotionManagementModule } from './promotion-management/promotion-management.module';
import { TrainingProgressManagementModule } from './training-progress-management/training-progress-management.module';
import { PersonalProfileModule } from './personal-profile/personal-profile.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NightCrewsComponent } from './night-crews/night-crews.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainingChecklistComponent } from './training-checklist/training-checklist.component';
import { TrainingEvaluationComponent } from './training-evaluation/training-evaluation.component';
import { RedirectCardComponent } from './redirect-card/redirect-card.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CredentialManagementModule,
    PromotionManagementModule,
    TrainingProgressManagementModule,
    PersonalProfileModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,    
  ],
  providers: [
    CoreService,
    MemberManagementServiceService,
    CredentialManagementService,
    HttpClientModule,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
