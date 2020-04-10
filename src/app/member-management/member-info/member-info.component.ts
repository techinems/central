import { Component, OnInit } from '@angular/core';
import { MemberManagementServiceService } from '../../services/member-management-service.service';
import { Observable, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";


@Component({
  selector: 'central-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent implements OnInit {

  permissions: Observable<any[]>;
  selectedPermission: any;

  currentUserPermissions: Observable<any[]>;
  current_operator_id: any;
  current_user_id: any;


  currentUser = {
    "first_name" : 'Loading',
    "last_name" : 'Loading',
    "email" : 'Loading',
    "Phone Number" : 'Loading',
  };

  constructor(
    private memberManageService: MemberManagementServiceService,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private toaster: Toaster,
  ) { }

  addPermission() {
    this.memberManageService.assignPermissionToUser(this.selectedPermission, this.current_user_id, this.current_operator_id).subscribe((data) => {
      console.log(data);
      if (data['isSuccess']) {
        this.showToast(data['msg'],'success')
        setTimeout(() => {window.location.reload();},2000);        
      } else {
        this.showToast(data['msg'],'warning')
        setTimeout(() => {window.location.reload();},2000);
      }
    })
  }

  togglePermission(permission_id, active){
    this.memberManageService.togglePermission(
      permission_id, 
      this.current_user_id, 
      this.current_operator_id, 
      active
    ).subscribe((data)=>{
      console.log(data);
      if (data['isSuccess']) {
        this.showToast(data['msg'],'success')
        setTimeout(() => {window.location.reload();},2000);        
      } else {
        this.showToast(data['msg'],'warning')
        setTimeout(() => {window.location.reload();},2000);                
      }
    },(error)=>{
      console.log(error);
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

  ngOnInit() {
    this.current_user_id = this.route.snapshot.queryParamMap.get('userId')
    this.current_operator_id = this.cookieService.get('user_id');
    this.memberManageService.getUser(this.current_user_id).subscribe((user) =>{
      this.currentUser = user;
      console.log(this.currentUser);
    });
  
    this.memberManageService.getPermissions().subscribe((permissions) => {
      this.permissions = permissions;
      console.log(this.permissions);
      
    })

    this.memberManageService.getUserPermissions(this.current_user_id).subscribe((permissions) =>{
      this.currentUserPermissions = permissions;
      console.log(this.currentUserPermissions);
      
    })

  }

}
