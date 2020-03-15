import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'central-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.scss']
})
export class MemberTableComponent implements OnInit {

  users: any = [
      {
        "userId": 1,
        "firstName": "Krish",
        "lastName": "Lee",
        "phoneNumber": "123456",
        "emailAddress": "krish.lee@learningcontainer.com"
      },
      {
        "userId": 2,
        "firstName": "racks",
        "lastName": "jacson",
        "phoneNumber": "123456",
        "emailAddress": "racks.jacson@learningcontainer.com"
      },
      {
        "userId": 3,
        "firstName": "denial",
        "lastName": "roast",
        "phoneNumber": "33333333",
        "emailAddress": "denial.roast@learningcontainer.com"
      },
      {
        "userId": 4,
        "firstName": "devid",
        "lastName": "neo",
        "phoneNumber": "222222222",
        "emailAddress": "devid.neo@learningcontainer.com"
      },
      {
        "userId": 5,
        "firstName": "jone",
        "lastName": "mac",
        "phoneNumber": "111111111",
        "emailAddress": "jone.mac@learningcontainer.com"
      }
    ]

  getUser(userId){
    console.log('GET USER', userId);
    this.router.navigate(['/member-info']);
  }

  createUser(){
    console.log('TODO: jump to user-create page');
    
    
  }

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

}
