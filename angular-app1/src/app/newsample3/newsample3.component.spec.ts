import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsample3Component } from './newsample3.component';

describe('Newsample3Component', () => {
  let component: Newsample3Component;
  let fixture: ComponentFixture<Newsample3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newsample3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newsample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
