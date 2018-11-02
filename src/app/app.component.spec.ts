import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxTimeLineModule } from 'projects/ngx-time-line/src/lib/ngx-time-line.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        NgxTimeLineModule,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
