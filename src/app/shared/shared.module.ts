import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalcomponentComponent } from './modalcomponent/modalcomponent.component';
import { AmplifyAngularModule, AmplifyService, AmplifyModules } from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ModalcomponentComponent],
  imports: [
    CommonModule,
    AmplifyAngularModule
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
    exports: [
  FooterComponent,HeaderComponent,ModalcomponentComponent
]
})
export class SharedModule { }
