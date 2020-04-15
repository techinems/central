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
    return this.apiService.get(`/progress/start/${user_id}&${credential_id}`).pipe(catchError(this.formatErrors))
  }  

  startTraining(request_body): Observable<any>{
    return this.apiService.post('/progress',request_body).pipe(catchError(this.formatErrors))
  }

  checkOffItem(user_id, opreator_id, checklist_item_id, active, comments): Observable<any>{
    let request_info = {
      user_id : Number(user_id),
      checklist_item_id :Number(checklist_item_id),
      active: Boolean(active),
      updated_by: Number(opreator_id),
      comments: comments
    }

    console.log('checkoff item', request_info);
    
    return this.apiService.put('/progress',request_info).pipe(catchError(this.formatErrors))
  }


}
