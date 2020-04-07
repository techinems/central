import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../services/core-service.service';
import { CookieService } from 'ngx-cookie-service';

import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";
import { MemberManagementServiceService } from '../services/member-management-service.service';

@Component({
  selector: 'central-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  profileForm = this.fb.group({
    email: [''],
    password: ['']
  })

  constructor(
    private fb: FormBuilder,
    private toaster: Toaster,
    private data: CoreService,
    private router: Router,
    private cookieService: CookieService,
    private memberManageService: MemberManagementServiceService,
  ){

  }

  login(): void {
    this.memberManageService.login(this.profileForm.value).subscribe((result) => {
      console.log('log in result', result);
      
      if (result['isSuccess'] == true){
        this.showToast(result['msg'], 'success')
        this.data.toggleNavVisibility('visible');
        this.router.navigate(['/night-crews']);
        this.cookieService.set('isLoggedIn','true')
        this.cookieService.set('user_id',result['result']['id'])
        this.cookieService.set('first_name',result['result']['first_name'])
        this.cookieService.set('last_name',result['result']['last_name'])
      } else {
        this.showToast(result['msg'], 'warning')
      }
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
    this.data.currentFoo.subscribe(message =>this.message = message);
    if(this.cookieService.get('isLoggedIn') === 'true'){
      console.log('user_logged in');
      this.router.navigate(['/dashboard']);
    } 
    if(this.cookieService.get('isLoggedIn') === 'false'){
      console.log('not user_logged in');
      this.data.toggleNavVisibility('hidden')
      this.router.navigate(['/']);
    }    
  }

}
