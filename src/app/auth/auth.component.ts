import { Component, OnInit } from '@angular/core';

import { AmplifyService }  from 'aws-amplify-angular';
import {Auth, AuthClass} from 'aws-amplify';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    signedIn: boolean;
    user: any;
    greeting: string;
  constructor(private amplifyService: AmplifyService) {
      console.log("et");
       
       this.amplifyService.authStateChange$
            .subscribe(authState => {
                this.signedIn = authState.state === 'signedIn';
                if (!authState.user) {
                    this.user = null;
                } else {
                    this.user = authState.user;
                    this.greeting = "Hello " + this.user.username;
                }
        });
   }

  ngOnInit() {
   
  }

}
