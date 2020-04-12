import { Component } from '@angular/core';
import { CoreService } from './services/core-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MemberManagementServiceService } from './services/member-management-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'central';
  navVisibility: string;
  message: string;

  member_management_permission: string;
  credential_management_permission: string;
  trainee_progress_management_permission: string;
  promotion_management_permission: string;

  constructor(
    private data: CoreService,
    private router: Router,
    private cookieService: CookieService,
    private memberManageService: MemberManagementServiceService,
  ){

  }

  foo(): void {
    console.log("BAR");
    this.data.changeFoo('FROM APP.COM');
  }  

  logOut(){
    console.log('logging user out');
    this.cookieService.deleteAll('/');
    this.cookieService.set('isLoggedIn','false');
    this.data.toggleNavVisibility('hidden');

    this.data.toogleMeberPage('hidden');
    this.data.toogleCredentialPage('hidden');
    this.data.toogleTrainingPage('hidden');
    this.data.tooglePromotionPage('hidden');

    this.router.navigate(['/']);
  }

  refreshPermission() {
    let userInfo = {
      'password': this.cookieService.get('password'),
      'email' : this.cookieService.get('email')
    }
    
    
    this.memberManageService.login(userInfo).subscribe((result) => {
      console.log('Refresh login result', result);
      
      if (result['isSuccess'] == true){
        result['permissions'].forEach(val => {
          if (val.permission_name == 'member_management'){
            this.cookieService.set('member_page',(val.active));
            this.data.toogleMeberPage(Boolean(val.active) ? 'visible':'hidden');
          }
          if (val.permission_name == 'credential_management'){
            this.data.toogleCredentialPage(Boolean(val.active) ? 'visible':'hidden');
          }
          if (val.permission_name == 'training_progress_management'){
            this.data.toogleTrainingPage(Boolean(val.active) ? 'visible':'hidden');
          }
          if (val.permission_name == 'promotion_management'){
            this.data.tooglePromotionPage(Boolean(val.active) ? 'visible':'hidden');
          }                    
         });
      } else {

      }
    })    
  }
  ngOnInit(){
    this.data.currentFoo.subscribe(message =>this.message = message);
    this.data.currentNavVisibility.subscribe(status =>this.navVisibility = status);
    this.data.currentMemberManagementVisibility.subscribe(result => this.member_management_permission = result);
    this.data.currentCredentialManagementVisibility.subscribe(result => this.credential_management_permission = result);
    this.data.currentTrainingManagementVisibility.subscribe(result => this.trainee_progress_management_permission = result);
    this.data.currentPromotionManagementVisibility.subscribe(result => this.promotion_management_permission = result);
    
    console.log("member_management_permission: ",this.member_management_permission);
    console.log('this.data.currentMemberManagementVisibility', this.data.currentMemberManagementVisibility)
    
    this.refreshPermission();
    let login_status = this.cookieService.get('isLoggedIn')
    console.log("is user logged in : ", login_status);

    if(this.cookieService.get('isLoggedIn') === 'true'){
      this.data.toggleNavVisibility('visible')
    } 

    if(this.cookieService.get('isLoggedIn') === 'false'){
      this.data.toggleNavVisibility('hidden')
      this.router.navigate(['/']);
    }

    if(this.cookieService.get('member_page') === 'true'){
      this.data.toggleNavVisibility('visible')
    } 

  }

}
