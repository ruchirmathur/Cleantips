import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AmplifyAngularModule, AmplifyService, AmplifyModules } from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
import {NgxWebstorageModule} from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { SearchresultsModule } from './searchresults/searchresults.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalcomponentComponent } from './shared/modalcomponent/modalcomponent.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    AngularSvgIconModule,
    AmplifyAngularModule,
    NgxWebstorageModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
      {
      provide: AmplifyService,
      useFactory:  () => {
        return AmplifyModules({
          Auth
        });
      }
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ModalcomponentComponent ]
})
export class AppModule { }
