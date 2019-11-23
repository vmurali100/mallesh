import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanglaComponent } from './bangla.component';

describe('BanglaComponent', () => {
  let component: BanglaComponent;
  let fixture: ComponentFixture<BanglaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanglaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanglaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
