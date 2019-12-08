import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { SearchFormComponent } from './search-form/search-form.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
