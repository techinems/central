import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CredentialManagementService } from '../../services/credential-management.service';

@Component({
  selector: 'central-credential-info',
  templateUrl: './credential-info.component.html',
  styleUrls: ['./credential-info.component.scss']
})
export class CredentialInfoComponent implements OnInit {

  
  currentCredential = {
    "name" : 'Loading',
    "abbr" : 'Loading',
    "major_cred" : 'Loading',
    "parent_cred" : 'Loading',
    "created_by" : 'Loading',
    "created" : 'Loading',
    "id" : '0'
  };

  currentChecklist = 'SOME ITEM'

  constructor(
    private credentialManagementService: CredentialManagementService,
    private route: ActivatedRoute
  ) { }

  onKey(event: any) { // without type info
    console.log(event);
    this.currentChecklist = event;
  }

  createCheckListItem(){
    let itemInfo = {
      'credential_id' : this.currentCredential.id,
      'text' : this.currentChecklist,
      'created_by' : 0
    }
    console.log(itemInfo);
    
    this.credentialManagementService.createChecklistItem(itemInfo).subscribe((result)=>{
      console.log(result);
    })
  }

  ngOnInit() {

    let credentialId = this.route.snapshot.queryParamMap.get('credentialId');
    

    this.credentialManagementService.getCredential(credentialId).subscribe((credential) =>{
      this.currentCredential = credential;
      console.log(this.currentCredential);
    });    
  }

}
