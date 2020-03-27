import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CredentialManagementService } from '../../services/credential-management.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'central-credential-table',
  templateUrl: './credential-table.component.html',
  styleUrls: ['./credential-table.component.scss']
})
export class CredentialTableComponent implements OnInit {

  constructor(
    private router: Router,
    private credentialManagementService: CredentialManagementService,
  ) {}

  credentials: Observable<any[]>;

  createCredential(){
    console.log('jump to user-create page');
    this.router.navigate(['/new-credential']);
    
  }

  getCredential(credentialId){
    console.log('GET CREDENTIAL', credentialId);
    this.router.navigate(['/credential-info'],{ queryParams: { credentialId: credentialId}});
  }

  ngOnInit() {
    this.credentialManagementService.getCredential().subscribe((data) => {
      this.credentials = data;
      console.log(this.credentials);
    });
  }

}
