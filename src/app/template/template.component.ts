import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from './template.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(private templateService:TemplateService,private router: Router) { }

  ngOnInit() {
  console.log("oniit::");
  
  }

}
