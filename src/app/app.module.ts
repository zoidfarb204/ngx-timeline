import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimelineModule } from './modules/timeline/timeline.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TimelineModule
  ],
  declarations: [AppComponent],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
