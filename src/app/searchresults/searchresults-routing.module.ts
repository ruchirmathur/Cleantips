import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchresultsComponent} from './searchresults.component';

const routes: Routes = [
  {
    path:'',
    component:SearchresultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchresultsRoutingModule { }
