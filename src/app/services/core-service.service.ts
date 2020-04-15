import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { MemberManagementServiceService } from './member-management-service.service';


@Injectable()
export class CoreService {
    private foo = new BehaviorSubject<string>('default-string');
    currentFoo = this.foo.asObservable();

    private navVisibility = new BehaviorSubject<string>('hidden');
    currentNavVisibility = this.navVisibility.asObservable();

    private memberManagementVisibility = new BehaviorSubject<string>('hidden');
    currentMemberManagementVisibility = this.memberManagementVisibility.asObservable();

    private credentialManagementVisibility = new BehaviorSubject<string>('hidden');
    currentCredentialManagementVisibility = this.credentialManagementVisibility.asObservable();
    
    private trainingManagementVisibility = new BehaviorSubject<string>('hidden');
    currentTrainingManagementVisibility = this.trainingManagementVisibility.asObservable();
    
    private promotionManagementVisibility = new BehaviorSubject<string>('hidden');
    currentPromotionManagementVisibility = this.promotionManagementVisibility.asObservable();    

    constructor(
    ){ }

    changeFoo(input: string){
        this.foo.next(input);
    }

    toggleNavVisibility(status: string){
        this.navVisibility.next(status);
    }

    toogleMeberPage(status: string){
        console.log('some one changed me into ', status);
        
        this.memberManagementVisibility.next(status);
    }  

    toogleCredentialPage(status: string){
        console.log('some one changed me into ', status);
        
        this.credentialManagementVisibility.next(status);
    }

    toogleTrainingPage(status: string){
        console.log('some one changed me into ', status);
        
        this.trainingManagementVisibility.next(status);
    }

    tooglePromotionPage(status: string){
        console.log('some one changed me into ', status);
        
        this.promotionManagementVisibility.next(status);
    }

              
}

