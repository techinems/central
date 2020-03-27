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
    "created" : 'Loading'
  };

  constructor(
    private credentialManagementService: CredentialManagementService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    let credentialId = this.route.snapshot.queryParamMap.get('credentialId')

    this.credentialManagementService.getCredential(credentialId).subscribe((credential) =>{
      this.currentCredential = credential;
      console.log(this.currentCredential);
    });    
  }

}
