import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable()
export class MemberManagementServiceService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
  ) { }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }  

  getUser(userId=''): Observable<any>{
    return this.apiService.get('/users/'+userId).pipe(catchError(this.formatErrors))
  }


  createUser(userInfo): Observable<any>{
      return this.apiService.post('/users',userInfo).pipe(catchError(this.formatErrors))
  }

  login(userInfo): Observable<any>{
    return this.apiService.post('/users/sessions',userInfo).pipe(catchError(this.formatErrors))
  }
 
  getPermissions(): Observable<any>{
    return this.apiService.get('/permissions/').pipe(catchError(this.formatErrors))
  }

  getUserPermissions(userId=''): Observable<any>{
    return this.apiService.get('/permissions/user/'+userId).pipe(catchError(this.formatErrors))
  }

  assignPermissionToUser(permissionId, userId, operatorId):Observable<any>{ 
    let request_info = {
      user_id : userId,
      permission_id: permissionId,
      created_by: operatorId
    }
    return this.apiService.post('/permissions/user',request_info).pipe(catchError(this.formatErrors))
  }

  togglePermission(permissionId, userId, operatorId, active): Observable<any>{
    let request_info = {
      user_id : Number(userId),
      permission_id :Number(permissionId),
      active: Boolean(active),
      updated_by: Number(operatorId)
    }

    console.log('toggle permission', request_info);
    
    return this.apiService.put('/permissions/user',request_info).pipe(catchError(this.formatErrors))
  }
}
