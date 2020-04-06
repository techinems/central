import { Component } from '@angular/core';
import { CoreService } from './services/core-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'central';
  navVisibility: string;
  message: string;

  constructor(
    private data: CoreService,
    private router: Router,
    private cookieService: CookieService
  ){

  }

  foo(): void {
    console.log("BAR");
    this.data.changeFoo('FROM APP.COM');
  }  

  logOut(){
    console.log('logging user out');
    this.cookieService.set('isLoggedIn','false');
    this.data.toggleNavVisibility('hidden');
    this.router.navigate(['/']);
  }

  ngOnInit(){
    this.data.currentFoo.subscribe(message =>this.message = message);
    this.data.currentNavVisibility.subscribe(status =>this.navVisibility = status);
    
    let login_status = this.cookieService.get('isLoggedIn')
    console.log("is user logged in : ", login_status);
    
    if(this.cookieService.get('isLoggedIn') === 'true'){
      this.data.toggleNavVisibility('visible')
    } 

    if(this.cookieService.get('isLoggedIn') === 'false'){
      this.data.toggleNavVisibility('hidden')
      this.router.navigate(['/']);
    }

  }

}
