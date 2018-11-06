import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxTimeLineModule } from 'projects/ngx-time-line-component/src/public_api';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxTimeLineModule
  ],
  declarations: [AppComponent],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
