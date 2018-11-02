import { NgModule } from '@angular/core';
import { TimelineComponent } from 'projects/ngx-time-line/src/lib/components/timeline/timeline.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [TimelineComponent]
})
export class NgxTimeLineModule { }
