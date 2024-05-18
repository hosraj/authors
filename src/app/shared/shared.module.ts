import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BaseComponent} from "./base/base.component";
import {ImageUploadComponent} from './image-upload/image-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseComponent,CommonModule, NgbModule,FormsModule,ReactiveFormsModule,ImageUploadComponent
  ]
})
export class SharedModule { }
