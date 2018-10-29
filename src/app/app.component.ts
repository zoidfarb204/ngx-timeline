import { Component, OnInit, HostListener, HostBinding, ElementRef } from '@angular/core';
import { PageModel } from './models/page.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  selectedPage: any;
  selectedIndex: number;
  paging = false;
  page = 1;
  config: PageModel[] = [{
    title: 'Item 1',
    subTitle: 'Item 1',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'
    },
    {
      componentType: 'image',
      images: [{
        path: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
        caption: 'Flower'
      },
      {
        path: 'https://images.pexels.com/photos/10462/pexels-photo-10462.jpeg?cs=srgb&dl=bloom-flora-floral-10462.jpg&fm=jpg',
        subCaption: 'This is a cool Flower'
      }
      ]
    }]
  },
  {
    title: 'Page 2',
    subTitle: 'Subtitle page 2',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'
    }]
  },
  {
    title: 'Page 3',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 4',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 5',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 6',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 7',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 8',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 9',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 10',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 11',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 12',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 13',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 14',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 15',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 16',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 17',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 18',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 19',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 20',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }, {
    title: 'Page 21',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  },
  {
    title: 'Page 22',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  },
  {
    title: 'Page 23',
    subTitle: 'Subtitle page 3',
    components: [{
      componentType: 'text',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'

    },
    ]
  }
  ];





  ngOnInit() {
    this.selectedPage = this.config[0];
    this.selectedIndex = 0;
  }

  click(item, index) {
    this.selectedPage = item;
    this.selectedIndex = index;
    console.log(this.selectedPage);
  }

  getWidth(item, width) {
    const distance = this.getDistance(width);
    if (distance >= 50) {
      return 50 + (item * distance);
    } else {
      this.paging = true;
      const pos = 50 + (item * 50);
      const perpage = this.perPage(width);
      if (item < (perpage * (this.page - 1)) - 1) {
        return -100;
      }
      if (item > (perpage * (this.page)) - 1) {
        return (width + 100);
      }
      return 50 + ((item - ((this.page - 1) * (perpage - 1))) * 50);
    }
  }

  getDistance(width) {
    const useableWidth = this.getUsableWidth(width);
    return Math.floor(useableWidth / (this.config.length - 1));
  }

  getUsableWidth(width) {
    return width - 100;
  }

  maxPage(width) {
    const useableWidth = this.getUsableWidth(width);
    const distance = 50;
    return Math.ceil((distance * this.config.length) / useableWidth);
  }

  perPage(width) {
    const useableWidth = this.getUsableWidth(width);
    const distance = 50;
    return Math.ceil(useableWidth / distance);
  }

  getColor(index) {
    if (index <= this.selectedIndex) {
      return 'lightblue';
    } else {
      return 'lightgray';
    }
  }

  changePage(am) {
    this.page = this.page + am;
  }
}
