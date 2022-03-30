import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule}  from '@angular/common/http';
import { QuestionarioComponent } from './questionario/questionario.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
