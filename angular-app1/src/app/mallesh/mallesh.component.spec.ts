import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalleshComponent } from './mallesh.component';

describe('MalleshComponent', () => {
  let component: MalleshComponent;
  let fixture: ComponentFixture<MalleshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalleshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalleshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
