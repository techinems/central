import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NightCrewsComponent } from './night-crews/night-crews.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainingChecklistComponent } from './training-checklist/training-checklist.component';
import { TrainingEvaluationComponent } from './training-evaluation/training-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NightCrewsComponent,
    DashboardComponent,
    TrainingChecklistComponent,
    TrainingEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
