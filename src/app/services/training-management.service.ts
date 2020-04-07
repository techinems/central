import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingManagementService {
  private formatErrors(error: any) {
    return  throwError(error.error);
  }  

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
  ){ }

  getAllTrainingProgress(): Observable<any>{
    return this.apiService.get('/progress/all/').pipe(catchError(this.formatErrors))
  }

  getAllCredentialStatusByUser(userId): Observable<any>{
    return this.apiService.get('/progress/all/'+userId).pipe(catchError(this.formatErrors))
  }

  getDetailedProgressInfo(user_id, credential_id): Observable<any>{
    // GET http://localhost:3000/progress/start/1&1    
    return this.apiService.get(`/progress/start/${user_id}&${credential_id}`).pipe(catchError(this.formatErrors))
  }  

  startTraining(request_body): Observable<any>{
    // POST http://localhost:3000/progress
    // {
    //   "user_id" : 2,
    //   "credential_id" :1,
    //   "trainer": 0,
    //   "created_by": 0	
    // }
    return this.apiService.post('/progress',request_body).pipe(catchError(this.formatErrors))
  }



  checkOffItem(user_id, checklist_item_id, active): Observable<any>{
    // PUT http://localhost:3000/progress
    // {
    //   "user_id" : 1,
    //   "checklist_item_id" : 1,
    //   "active" : true
    // }    
    let request_info = {
      user_id : Number(user_id),
      checklist_item_id :Number(checklist_item_id),
      active: Boolean(active),
    }
    return this.apiService.put('/progress',request_info).pipe(catchError(this.formatErrors))
  }


}
