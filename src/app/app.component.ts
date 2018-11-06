import { Component, OnInit } from '@angular/core';
import { TimelineSettingsModel } from 'projects/ngx-time-line/src/public_api';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  settings: TimelineSettingsModel;


  ngOnInit(): void {
    this.settings = {
      inactiveColor: 'lightgray',
      activeColor: 'darkblue',
      showLabel: true,
      labelColor: 'blue',
      data: [
        { title: 'Page 1' },
        { title: 'Page 2' },
        { title: 'Page 3' },
        { title: 'Page 4' }
      ]
    };
  }

}
