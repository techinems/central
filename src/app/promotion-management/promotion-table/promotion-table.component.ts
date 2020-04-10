import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";
import { Router } from '@angular/router';

import { PromotionManagementService } from '../../services/promotion-management.service';

@Component({
  selector: 'central-promotion-table',
  templateUrl: './promotion-table.component.html',
  styleUrls: ['./promotion-table.component.scss']
})
export class PromotionTableComponent implements OnInit {

  constructor(
    private promotionManagementService: PromotionManagementService,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private toaster: Toaster,
    private router: Router,
  ) { }

  promotions: Observable<any[]>;

  getPromotion(promotion_id){
    console.log('GET promotion', promotion_id);
    this.router.navigate(['/promotion-info'],{ queryParams: { promotion_id: promotion_id}});
  }

  ngOnInit() {
    this.promotionManagementService.getPromotion().subscribe((data) => {
      this.promotions = data;
      console.log(this.promotions);
    });    
  }

}
