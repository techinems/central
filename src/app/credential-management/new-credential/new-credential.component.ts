import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";
import { CredentialManagementService } from '../../services/credential-management.service';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'central-new-credential',
  templateUrl: './new-credential.component.html',
  styleUrls: ['./new-credential.component.scss']
})
export class NewCredentialComponent implements OnInit {
  credentials: Observable<any[]>;
  selectedCredentialId = '0';

  profileForm = this.fb.group({
    name : [''],
    abbr: [''],
    major_cred: [''],
    parent_cred: [''],
    active : 1,
    checkListItems: this.fb.array([
      this.fb.control('')
    ])

  });


  
  
  get checkListItems() {
    return this.profileForm.get('checkListItems') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private toaster: Toaster,
    private router: Router,
    private credentialManagementService: CredentialManagementService,
  ) { }


  updateProfile() {
    this.profileForm.patchValue({
      name: "First",
      abbr: "F",
      major_cred : 0,
      parent_cred : 0,
      active : 1,
      created_by: 0,
      updated_by: 0
    });
  }

  addItem() {
    this.checkListItems.push(this.fb.control(''));
  }

  removeItem(rowIndex:number){
    this.checkListItems.removeAt(rowIndex);
  }  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    let formValue = this.profileForm.value
    let credentialInfo = {
      "name" : formValue['name'],
      "abbr" : formValue['abbr'],
      "major_cred" : formValue['major_cred'],
      "parent_cred" : formValue['parent_cred'],
      "active" : 1,
      "created_by": 0,
      "updated_by": 0    
    }
    console.log(credentialInfo);
    this.credentialManagementService.createCredential(credentialInfo).subscribe(
      (result) => {
        console.log(result);
        this.showToast(result['msg'])
        this.router.navigate(['/credential-management']);        
      }
    )
    
    
  }

  showToast(message) {
    const type = 'success';
    this.toaster.open({
      position: 'top-center',
      text: message,
      caption: type + ' notification',
      type: type,
    });
  } 

  ngOnInit(){
    this.credentialManagementService.getCredential().subscribe(
      (creds) => {
        this.credentials = creds;
      }
    );
    console.log(this.credentials)
  }

}
