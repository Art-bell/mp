import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeASurveyStartComponent } from './take-a-survey-start.component';

describe('TakeASurveyStartComponent', () => {
  let component: TakeASurveyStartComponent;
  let fixture: ComponentFixture<TakeASurveyStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeASurveyStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeASurveyStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
