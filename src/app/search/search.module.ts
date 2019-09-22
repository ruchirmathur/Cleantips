import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularSvgIconModule,
    FormsModule
  ]
})
export class SearchModule { }
