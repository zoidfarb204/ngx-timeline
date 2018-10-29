import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        CarouselModule.forRoot()
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('usable width should be 100 less than width'), async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.getUsableWidth(800)).toEqual(700);
  });
});
