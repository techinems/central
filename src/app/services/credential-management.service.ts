import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CredentialManagementService {
  
  private formatErrors(error: any) {
    return  throwError(error.error);
  }  

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
  ){ }

  getCredential(credentialID=''): Observable<any>{
    return this.apiService.get('/credentials/'+credentialID).pipe(catchError(this.formatErrors))
  }


  createCredential(credentialInfo): Observable<any>{
      return this.apiService.post('/credentials/',credentialInfo).pipe(catchError(this.formatErrors))
  }  

}
