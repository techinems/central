import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NightCrewsComponent } from './night-crews/night-crews.component';
import { TrainingChecklistComponent } from './training-checklist/training-checklist.component';
import { TrainingEvaluationComponent } from './training-evaluation/training-evaluation.component';
import { RedirectCardComponent } from './redirect-card/redirect-card.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: RedirectCardComponent},
  { path: 'night-crews', component: NightCrewsComponent },
  { path: 'training-checklist', component: TrainingChecklistComponent },
  { path: 'training-evaluation', component: TrainingEvaluationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
