import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";
import { Router } from '@angular/router';

import { TrainingManagementService } from '../../services/training-management.service';

@Component({
  selector: 'central-training-progress-table',
  templateUrl: './training-progress-table.component.html',
  styleUrls: ['./training-progress-table.component.scss']
})
export class TrainingProgressTableComponent implements OnInit {

  constructor(
    private trainingManageService: TrainingManagementService,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private toaster: Toaster,
    private router: Router,
  ) { }

  progresses: Observable<any[]>;

  getProgressDetail(user_id, credential_id){
    this.router.navigate(['/trainee-progress-info'],{ 
      queryParams: { 
        user_id: user_id,
        credential_id: credential_id,
        mentor: true
      }
    });
  }

  ngOnInit() {
    this.trainingManageService.getAllTrainingProgress().subscribe((data)=>{
      this.progresses = data;
      console.log(this.progresses);
      
    })
  }

}
