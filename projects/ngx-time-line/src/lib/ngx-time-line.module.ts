import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [TimelineComponent]
})
export class NgxTimeLineModule { }
