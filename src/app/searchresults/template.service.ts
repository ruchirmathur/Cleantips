import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';
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
export class TemplateService {


    constructor(private http: HttpClient) { }

    createTemplate(appServices, architecture) {
        const request: IRequest = {};
        request.appServices = appServices;
        request.architecture = architecture;
        console.log("test::");
        return this.http.post("http://localhost:8080/templates", request)
            .subscribe(
            data => {
                console.log("POST Request is successful ", data);
            }, error => {

                console.log("Error", error);

            });

    }

}
