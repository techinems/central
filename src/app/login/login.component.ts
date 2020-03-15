import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../services/core-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'central-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(
    private data: CoreService,
    private router: Router,
    private cookieService: CookieService

  ){

  }

  foo(): void {
    console.log("BAR");
    this.data.changeFoo('BAR');
  }

  login(): void {
    this.data.toggleNavVisibility('visible');
    this.router.navigate(['/night-crews']);
    this.cookieService.set('isLoggedIn','1')
  }

  ngOnInit() {
    this.data.currentFoo.subscribe(message =>this.message = message);
    if(this.cookieService.get('isLoggedIn')){
      console.log('user_logged in');
      this.router.navigate(['/dashboard']);
    
      
    }    
  }

}
