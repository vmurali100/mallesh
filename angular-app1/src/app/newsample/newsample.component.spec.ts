import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsampleComponent } from './newsample.component';

describe('NewsampleComponent', () => {
  let component: NewsampleComponent;
  let fixture: ComponentFixture<NewsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
