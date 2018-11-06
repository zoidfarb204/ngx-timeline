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
    component.settings = {
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
