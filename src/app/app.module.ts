import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BaseComponent } from './shared/base/base.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [ AppComponent,BaseComponent,],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
  ],
  bootstrap :  [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
