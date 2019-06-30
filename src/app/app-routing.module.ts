import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './search/search.module#SearchModule' },
  { path: 'search', loadChildren: './search/search.module#SearchModule' },
  { path: 'searchresults', loadChildren:'./searchresults/searchresults.module#SearchresultsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }