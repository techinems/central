import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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

  currentChecklistItem = 'SOME ITEM'
  
  currentCheckListItems:Observable<any[]>;
  

  constructor(
    private credentialManagementService: CredentialManagementService,
    private route: ActivatedRoute
  ) { }

  onKey(event: any) { // without type info
    console.log(event);
    this.currentChecklistItem = event;
  }

  createCheckListItem(){
    let itemInfo = {
      'credential_id' : this.currentCredential.id,
      'text' : this.currentChecklistItem,
      'created_by' : 0
    }
    console.log(itemInfo);
    
    this.credentialManagementService.createChecklistItem(itemInfo).subscribe((result)=>{
      console.log(result);
      window.location.reload();
    })
  }

  ngOnInit() {

    let credentialId = this.route.snapshot.queryParamMap.get('credentialId');
    

    this.credentialManagementService.getCredential(credentialId).subscribe((credential) =>{
      this.currentCredential = credential;
      this.currentCheckListItems = credential.checklist_items;
      console.log(this.currentCredential);
    });    
  }

}
