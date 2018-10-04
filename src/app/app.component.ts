import { Component, OnInit, HostListener, HostBinding, ElementRef } from '@angular/core';
import { PageModel } from './models/page.model';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  selectedPage: any;
  selectedIndex: number;
  config: PageModel[] = [{
    title: "Item 1",
    subTitle: "Item 1",
    components: [{
      componentType: "text",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex."
    },
    {
      componentType: "image",
      images: [{
        path: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg",
        caption: "Flower"
      },
      {
        path: "https://images.pexels.com/photos/10462/pexels-photo-10462.jpeg?cs=srgb&dl=bloom-flora-floral-10462.jpg&fm=jpg",
        subCaption: "This is a cool Flower"
      }
      ]
    }]
  },
  {
    title: "Page 2",
    subTitle: "Subtitle page 2",
    components: [{
      componentType: "text",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex."
    }]
  },
    {
      title: "Page 3",
      subTitle: "Subtitle page 3",
      components: [{
        componentType: "text",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex."

    }]
  }]
  
 

 

  ngOnInit() {
      this.selectedPage = this.config[0];
      this.selectedIndex = 0;
    }

  click(item, index) {
      this.selectedPage = item;
      this.selectedIndex = index;
    }

  getWidth(item, width) {
      var useableWidth = width - 100;
      var distance = Math.floor(useableWidth / this.config.length)
      return 50 + item * distance;
    }

    getColor(index){
      if (index <= this.selectedIndex) {
        return "lightblue"
      }else{
        return "lightgray"
      }
    }

  getClass() {
      var columnSize = Math.floor(12 / this.selectedPage.columns);
      console.log(columnSize);
      return "col-md-" + columnSize;
    }

  }
