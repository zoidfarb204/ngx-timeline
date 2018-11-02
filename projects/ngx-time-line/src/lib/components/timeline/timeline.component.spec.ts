import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineComponent],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    component.data = [{
      title: 'Item 1',
      subTitle: 'Item 1',
      components: [{
        componentType: 'text',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus magna, venenatis ut luctus ac, ultricies eu nulla. Integer in nulla viverra libero cursus dictum. Aliquam sodales ornare justo, vitae egestas lorem malesuada vel. Donec tincidunt nibh vel mollis pharetra. Etiam sed mollis urna. Suspendisse luctus sed arcu nec dapibus. Nulla bibendum venenatis eros a vestibulum. In pellentesque dolor nec est tincidunt lacinia. Cras quis vestibulum tortor. Phasellus in sollicitudin turpis. Nullam eget purus risus. Morbi luctus nisi at posuere pulvinar. Praesent ultrices neque sed sem venenatis, at blandit mauris aliquam. Morbi efficitur ipsum consequat congue laoreet. Praesent nec est gravida, efficitur magna maximus, congue ex.'
      }]
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
