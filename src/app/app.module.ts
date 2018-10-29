import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  declarations: [AppComponent],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
