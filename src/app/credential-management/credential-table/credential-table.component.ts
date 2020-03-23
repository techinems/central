import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CredentialManagementService } from '../../services/credential-management.service';

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

  createCredential(){
    console.log('jump to user-create page');
    this.router.navigate(['/new-credential']);
    
  }

  ngOnInit() {
  }

}
