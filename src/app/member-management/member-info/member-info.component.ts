import { Component, OnInit } from '@angular/core';
import { MemberManagementServiceService } from '../../services/member-management-service.service';
import { Observable, from } from 'rxjs';


@Component({
  selector: 'central-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent implements OnInit {

  people: Observable<any[]>;
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';

  constructor(
    private memberManageService: MemberManagementServiceService
  ) { }

  ngOnInit() {
    this.people = this.memberManageService.getMockPeople();
  }

}
