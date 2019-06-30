import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgbTypeaheadModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SearchModule { }
