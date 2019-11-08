import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsample2Component } from './newsample2.component';

describe('Newsample2Component', () => {
  let component: Newsample2Component;
  let fixture: ComponentFixture<Newsample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newsample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newsample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
