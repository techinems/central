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
    this.cookieService.deleteAll();
    this.data.toggleNavVisibility('hidden')
    this.router.navigate(['/']);
  }

  ngOnInit(){
    this.data.currentFoo.subscribe(message =>this.message = message);
    this.data.currentNavVisibility.subscribe(status =>this.navVisibility = status);

    if(this.cookieService.get('isLoggedIn')){
      console.log('user_logged in');
      this.data.toggleNavVisibility('visible')
 
    }
    console.log("GOOD MORNING");


    
  }

}
