import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';
import { Response } from './model/response';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService, private router: Router) { }

  public request: Request;
  public response: Response;
  model: any;
  searching = false;
  searchFailed = false;
  item: any;

  ngOnInit() {
  }
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.searchService.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )


  formatter = (x: {arhitecture: string}) => x.arhitecture;
  navigateSerachResults(): void {
    this.router.navigate(["searchresults"]);
  }
  itemSelected(item){
    console.log(item.appServices[0].type);
    this.item=item;
  }
}