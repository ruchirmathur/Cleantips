import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';
import { IRequest } from './model/request';


@Injectable({
    providedIn: 'root'
})
export class SearchService {
    configUrl = 'assets/config.json';

    constructor(private http: HttpClient) { }

    search(term: string) {
        const request: IRequest = {};
        request.architectureType = term;
        if (term === '') {
            return of([]);
        }
        return this.http.post("http://localhost:8080/services", request);

    }
    createTemplate() {
   const request: IRequest = {};
        request.architectureType = "test";

        return this.http.get("http://localhost:8080/services");
    }

}
