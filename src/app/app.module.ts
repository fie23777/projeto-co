import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule}  from '@angular/common/http';
import { Fie } from './fie';
import { Cliente } from './cliente/cliente';

@NgModule({
  declarations: [
    AppComponent,
    Fie,
    Cliente
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
