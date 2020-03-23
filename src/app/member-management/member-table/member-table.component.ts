import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberManagementServiceService } from '../../services/member-management-service.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'central-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.scss']
})
export class MemberTableComponent implements OnInit {

  members: Observable<any[]>;

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
    
  constructor(
    private router: Router,
    private memberManageService: MemberManagementServiceService,
  ) {}

  getUser(userId){
    console.log('GET USER', userId);
    this.router.navigate(['/member-info'],{ queryParams: { userId: userId}});
  }

  createUser(){
    console.log('jump to user-create page');
    this.router.navigate(['/new-member']);
    
  }



  ngOnInit () {
    this.memberManageService.getUser().subscribe((data) => {
      this.members = data;
      console.log(this.members);
    });
    
    
  }

}
