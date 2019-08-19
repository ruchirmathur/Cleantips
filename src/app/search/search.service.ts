import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import { IRequest } from './model/request';
const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});

@Injectable({
  providedIn: 'root'
})
export class SearchService {
configUrl = 'assets/config.json';

  constructor(private http:HttpClient) { }

  searches(term:String){

    return this.http.post(this.configUrl,term);
  }
  search(term: string) {
    const request : IRequest = {};
    request.architectureType=term;
    if (term === '') {
      return of([]);
    }
    return   this.http.post("http://localhost:8080/services",request);

  }
}
