import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'central-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.foo();
  }

  foo(): void {
    console.log("BAR");
    
  }  

}
