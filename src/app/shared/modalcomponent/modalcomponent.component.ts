import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { AmplifyService }  from 'aws-amplify-angular';
import {Auth, AuthClass} from 'aws-amplify';

@Component({
    selector: 'app-modalcomponent',
    templateUrl: './modalcomponent.component.html',
    styleUrls: ['./modalcomponent.component.scss']
})
export class ModalcomponentComponent implements OnInit {
    signedIn: boolean;
    user: any;
    greeting: string;
    constructor(public modalService: NgbActiveModal,private amplifyService: AmplifyService,private router: Router) { 
         console.log("et");
       
       this.amplifyService.authStateChange$
            .subscribe(authState => {
                this.signedIn = authState.state === 'signedIn';
                if (!authState.user) {
                    this.user = null;
                } else {
                    
                    this.router.navigate(['/searchresults']);
                    this.modalService.close();
                }
        });
    }

    ngOnInit() {
    }

}
