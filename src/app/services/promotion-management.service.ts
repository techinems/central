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

  getPromotion(): Observable<any>{
    return 
  }
  
  createPromotionRequest(): Observable<any>{
    return 
  }

  approvePromotion(): Observable<any>{
    return 
  }

  voteForPromotion(): Observable<any>{
    return 
  }

}
