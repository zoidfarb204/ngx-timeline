import { Component, OnInit } from '@angular/core';
import { PageModel } from './models/page.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  }

}
