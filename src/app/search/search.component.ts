import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';
import { Response } from './model/response';
import { Observable, of } from 'rxjs';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth, AuthClass } from 'aws-amplify';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';
import { SessionStorageService } from 'ngx-webstorage';
import { ModalcomponentComponent } from '../shared/modalcomponent/modalcomponent.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    constructor(private searchService: SearchService, private router: Router, private amplifyService: AmplifyService,
        private session: SessionStorageService, private modalService: NgbModal) {
    }

    public request: Request;
    public response: Response;
    model: any;
    searching = false;
    searchFailed = false;
    item: any;
    appServices: any;
    show: boolean = false;
    showTemplateButton: boolean = false;
    archImage: string;
    architecture: string;
    sortOrders: string[] = ["Year", "Title", "Author"];
  selectedSortOrder: string = "Sort by...";
    regions: string[] = ["Asia Pacific (Hong Kong) Region", "Asia Pacific (Mumbai) Region", "Asia Pacific (Osaka) Local Region"
        , "Asia Pacific (Singapore) Region", "Asia Pacific (Seoul) Region", "Asia Pacific (Sydney) Region", "Asia Pacific (Tokyo) Region",
        "Europe (London) Region", "Europe (Paris) Region", "Europe (Stockholm) Region", "Mainland China (Beijing) Region", "Mainland China (Ningxia) Region",
        "South America (São Paulo) Region", "US West (Northern California) Region", "US East (Ohio) Region", "US West (Oregon) Region"];
    regionDefault: string = "Choose the region to build your services";
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


    formatter = (x: { arhitecture: string }) => x.arhitecture;
    navigateSerachResults(): void {
        this.router.navigate(["searchresults"]);
    }
    itemSelected(item) {

        if (item.appServices) {
            this.session.store("appServices", item.appServices);
            this.appServices = item.appServices;
            this.show = true;
            this.showTemplateButton = true;
            this.archImage = item.architectureImage;
        } else {
            this.show = false;
        }
    }
    createTemplate() {

        this.router.navigate(["templates"]);
    }

    openModal() {
        const modalRef = this.modalService.open(ModalcomponentComponent);
        this.session.store("architecture", this.architecture);
  

    }
    ChangeSortOrder(newSortOrder: string) { 
    this.selectedSortOrder = newSortOrder;
  }

select (value){
console.log("test val:::"+value);
}
}