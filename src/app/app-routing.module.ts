import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NightCrewsComponent } from './night-crews/night-crews.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'night-crews', component: NightCrewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
