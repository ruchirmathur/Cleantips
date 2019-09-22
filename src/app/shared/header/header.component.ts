import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth, AuthClass } from 'aws-amplify';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalcomponentComponent } from '../modalcomponent/modalcomponent.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    signedIn: boolean;
    user: any;
    greeting: string;
    nogreeting: string;
    constructor(private amplifyService: AmplifyService, private router: Router, private modalService: NgbModal) {
    }

    ngOnInit() {
        this.amplifyService.authStateChange$
            .subscribe(authState => {
                console.log("not authState.state" + authState.state);
                this.signedIn = authState.state === 'signedIn';
                if (!authState.user) {
                    this.user = null;
                    console.log("not logged in");
                } else {
                    this.user = authState.user;
                    this.greeting = "Hello " + this.user.username;
                    console.log("et" + this.greeting);
                }
            });
    }


    private auth() {
        console.log("test");
        Auth.federatedSignIn();

        Auth.currentSession().then(res => {
            let accessToken = res.getAccessToken()
            let jwt = accessToken.getJwtToken()
            //You can print them to see the full objects
            console.log(accessToken);
        })
    }
    private signout() {
        console.log("test");

        Auth.signOut({ global: true })
            .catch(err => console.log(err));
        this.greeting = null;
        this.router.navigate(['/']);
    }
    openModal() {
        const modalRef = this.modalService.open(ModalcomponentComponent, { windowClass : "myCustomModalClass"});

    }
}
