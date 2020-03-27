import { Component, OnInit } from '@angular/core';
import { MemberManagementServiceService } from '../../services/member-management-service.service';
import { Observable, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'central-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent implements OnInit {

  people: Observable<any[]>;
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';

  currentUser = {
    "first_name" : 'Loading',
    "last_name" : 'Loading',
    "email" : 'Loading',
    "Phone Number" : 'Loading',
  };



  constructor(
    private memberManageService: MemberManagementServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.people = this.memberManageService.getMockPeople();
    
    let userId = this.route.snapshot.queryParamMap.get('userId')

    this.memberManageService.getUser(userId).subscribe((user) =>{
      this.currentUser = user;
      console.log(this.currentUser);
    });
  
  }

}
