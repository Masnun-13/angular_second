import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel2Component } from './carousel2.component';

describe('Carousel2Component', () => {
  let component: Carousel2Component;
  let fixture: ComponentFixture<Carousel2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Carousel2Component]
    });
    fixture = TestBed.createComponent(Carousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
