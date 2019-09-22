import { Component, OnInit } from '@angular/core';
import { TemplateService } from './template.service';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit {
constructor(private templateService:TemplateService,private session:SessionStorageService) { }

  ngOnInit() {
  console.log("oniit::");
   console.log("this.session.retrieve::"+this.session.retrieve("architecture"));
  this.templateService.createTemplate(this.session.retrieve("appServices"),this.session.retrieve("architecture"));
      console.log("oniit::baaaad:::"+this.session.retrieve("appServices"));
  }

}
