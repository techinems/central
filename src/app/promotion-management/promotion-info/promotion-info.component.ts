import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";
import { Router } from '@angular/router';

import { TrainingManagementService } from '../../services/training-management.service';
import { PromotionManagementService } from '../../services/promotion-management.service';


@Component({
  selector: 'central-promotion-info',
  templateUrl: './promotion-info.component.html',
  styleUrls: ['./promotion-info.component.scss']
})
export class PromotionInfoComponent implements OnInit {

  current_promotion_id: any;
  current_credential_id: any;
  current_user_id: any;
  current_promotion: any;
  current_promotion_detail: any;
  current_promotion_status: true;

  current_promotion_votes: Observable<any[]>;

  current_comment = 'SOME COMMENT';
  current_decision = true;
  current_promotion_member_id: any;

  constructor(
    private trainingManageService: TrainingManagementService,
    private promotionManageService: PromotionManagementService,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private toaster: Toaster,
    private router: Router,
  ) { }

  onKey(event: any) { // without type info
    this.current_comment = event;
  }  

  vote(){
    this.promotionManageService.voteForPromotion(
      this.current_user_id,
      this.current_credential_id,
      this.current_promotion_id,
      (this.current_decision == true),
      this.current_comment,
      // this.current_promotion_member_id,
      this.current_user_id,
    ).subscribe((result) => {
      console.log(result);
      this.showToast(result['msg'], 'success')
      setTimeout(() => {window.location.reload();},2000);
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

  processPromotionRequest(decision, comments){
    this.promotionManageService.approvePromotion(
      this.current_promotion_id,
      decision,
      comments,
    ).subscribe((result)=>{
      console.log(result);
      this.showToast(result['msg'], 'success')
      setTimeout(() => {window.location.reload();},2000);
    })
  }

  ngOnInit() {
    this.current_promotion_id = this.route.snapshot.queryParamMap.get('promotion_id')
    this.current_user_id = this.cookieService.get('user_id')
    
    this.promotionManageService.getPromotion(this.current_promotion_id).subscribe((data)=>{
      this.current_promotion = data
      this.current_promotion_member_id = data['user_id']
      this.current_credential_id = data['credential_id']
      this.current_promotion_detail = data['detail']
      this.current_promotion_status = data['approved']
    })
  }

}
