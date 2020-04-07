import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";
import { Router } from '@angular/router';

import { TrainingManagementService } from '../../services/training-management.service';
import { PromotionManagementService } from '../../services/promotion-management.service';

@Component({
  selector: 'central-training-progress-info',
  templateUrl: './training-progress-info.component.html',
  styleUrls: ['./training-progress-info.component.scss']
})
export class TrainingProgressInfoComponent implements OnInit {

  currrent_progress: any;
  current_user_id: any;
  current_credential_id: any;
  is_mentor: boolean = false;
  is_clear: boolean = false;

  constructor(
    private trainingManageService: TrainingManagementService,
    private promotionManageService: PromotionManagementService,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private toaster: Toaster,
    private router: Router,
  ) { }

  checkOffItem(checklist_item_id, active){
    this.trainingManageService.checkOffItem(
      this.current_user_id, 
      checklist_item_id, 
      (active == Boolean('true'))
    ).subscribe((data)=>{
      console.log(data);
      this.showToast(data['msg'],'success')
      window.location.reload();
    })
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
  
  requestForPromotion(){
    this.promotionManageService.createPromotionRequest(
      this.current_user_id,
      this.current_credential_id,
      this.current_user_id
    ).subscribe((data)=>{
      console.log(data);
      this.showToast(data['msg'],'success')
      window.location.reload();
    })
  }
  
  ngOnInit() {
    let credential_id = this.route.snapshot.queryParamMap.get('credential_id');
    let user_id = this.route.snapshot.queryParamMap.get('user_id');
    let is_mentor = this.route.snapshot.queryParamMap.get('mentor');
    this.current_user_id = user_id;
    this.current_credential_id = credential_id;
    this.is_mentor = Boolean(is_mentor == 'true');
    this.trainingManageService.getDetailedProgressInfo(user_id, credential_id).subscribe((data)=>{
      console.log(data);
      this.currrent_progress = data;

      // Check if this checklist is lcear
      let state_set = new Set();
      for (let i of data) {
        console.log(i);
        state_set.add(i.isFinished);
      }
      if (state_set.has(false)) {
        this.is_clear = false;
      } else {
        this.is_clear = true;
      }
    })

  }

}
