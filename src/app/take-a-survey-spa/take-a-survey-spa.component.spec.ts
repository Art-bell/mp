import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeASurveySpaComponent } from './take-a-survey-spa.component';

describe('TakeASurveySpaComponent', () => {
  let component: TakeASurveySpaComponent;
  let fixture: ComponentFixture<TakeASurveySpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeASurveySpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeASurveySpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
