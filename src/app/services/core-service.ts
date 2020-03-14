import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {
    private foo = new BehaviorSubject<string>('default-string');
    currentFoo = this.foo.asObservable();

    private navVisibility = new BehaviorSubject<string>('hidden');
    currentNavVisibility = this.navVisibility.asObservable();

    constructor(){

    }

    changeFoo(input: string){
        this.foo.next(input);
    }

    toggleNavVisibility(status: string){
        this.navVisibility.next(status);
    }
}

