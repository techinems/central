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

  getAllCredentialStatus(userId): Observable<any>{
    return 
  }

  getDetailedProgressInfo(request_body): Observable<any>{
    // progress/start/
    return 
  }  

  startProgress(request_body): Observable<any>{
    return 
  }



  checkOffItem(request_body): Observable<any>{
    return 
  }

  // getProgress
}
