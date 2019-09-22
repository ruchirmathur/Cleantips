import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class TemplateModule { }
