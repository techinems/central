import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";
import { Router } from '@angular/router';

import { TrainingManagementService } from '../../services/training-management.service';

@Component({
  selector: 'central-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  current_status: Observable<any>;
  user_name: String =  "Loading";

  constructor(
    private trainingManageService: TrainingManagementService,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private toaster: Toaster,
    private router: Router,
  ) { }

  ngOnInit() {
    let current_user_id = this.cookieService.get('user_id')
    let current_user_name = this.cookieService.get('first_name') + " " + this.cookieService.get('last_name')
    this.user_name = current_user_name

    console.log("user id : ", current_user_id);
    this.trainingManageService.getAllCredentialStatusByUser(current_user_id).subscribe((result)=>{
      console.log(result);
      this.current_status = result
      
    })
  }

  startTraining(user_id, credential_id){
    let request_info = {
      user_id : Number(user_id),
      credential_id :Number(credential_id),
      trainer: 0,
      created_by: Number(user_id)	
    }
    console.log('creating training', request_info);
    
    this.trainingManageService.startTraining(request_info).subscribe(
      (result) => {
        console.log(result);
        this.showToast(result['msg'],'success');
      }
    )
  }

  getProgressDetail(user_id, credential_id){
    this.router.navigate(['/trainee-progress-info'],{ 
      queryParams: { 
        user_id: user_id,
        credential_id: credential_id,
        mentor: false,
      }
    });
  }

  showToast(message, level) {
    const type = level;
    this.toaster.open({
      position: 'top-center',
      text: message,
      caption: type + ' notification',
      type: type,
    });
  }     

}
