import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmplifyAngularModule, AmplifyService, AmplifyModules } from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
import Interactions from '@aws-amplify/interactions';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AmplifyAngularModule
  ],
  providers: [
      {
      provide: AmplifyService,
      useFactory:  () => {
        return AmplifyModules({
          Auth,
          Interactions
        });
      }
    }
  ]
})
export class AuthModule { }
