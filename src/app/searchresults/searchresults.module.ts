import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchresultsRoutingModule } from './searchresults-routing.module';
import { SearchresultsComponent } from './searchresults.component';

@NgModule({
  declarations: [SearchresultsComponent],
  imports: [
    CommonModule,
    SearchresultsRoutingModule
  ]
})
export class SearchresultsModule { }
