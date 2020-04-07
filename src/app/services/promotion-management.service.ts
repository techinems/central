import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionManagementService {
  private formatErrors(error: any) {
    return  throwError(error.error);
  }  

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
  ){ }

  getPromotion(promo_request_id=''): Observable<any>{
    // GET http://localhost:3000/promotions/1
    return this.apiService.get('/promotions/'+promo_request_id).pipe(catchError(this.formatErrors))
  }
  
  createPromotionRequest(user_id, credential_id, created_by): Observable<any>{
    // POST http://localhost:3000/promotions
    // {
    //   "user_id" : 1,
    //   "credential_id" : 0,
    //   "created_by" : 0
    // }
    let request_info = {
      user_id : Number(user_id),
      credential_id :Number(credential_id),
      created_by: Number(created_by),
    }
    return this.apiService.post('/promotions',request_info).pipe(catchError(this.formatErrors))
  }

  approvePromotion(promo_request_id, approved, comments): Observable<any>{
    // PUT http://localhost:3000/promotions
    // { 
    //   "promo_request_id" : 1,
    //   "approved" : true, 
    //   "comments" : "promotion passed"
    // }
    let request_info = {
      promo_request_id : Number(promo_request_id),
      approved :Boolean(approved),
      comments: String(comments),
    }
    return this.apiService.put('/promotions',request_info).pipe(catchError(this.formatErrors))
  }

  voteForPromotion(user_id, credential_id, promo_request_id, vote, comments, created_by): Observable<any>{
    // POST http://localhost:3000/promotions/vote
    // {
    //   "user_id" : 1, 
    //   "credential_id" : 0,
    //   "promo_request_id" : 1,
    //   "vote" : true,
    //   "comments" : "GOOD JOB", 
    //   "created_by": 0     
    // }    
    let request_info = {
      user_id : Number(user_id),
      credential_id : Number(credential_id),
      promo_request_id : Number(promo_request_id),
      vote : Boolean(vote),
      comments: String(comments),
      created_by: Number(created_by),
    }

    console.log(request_info);
    // return 
    return this.apiService.post('/promotions/vote',request_info).pipe(catchError(this.formatErrors))
  }

}
