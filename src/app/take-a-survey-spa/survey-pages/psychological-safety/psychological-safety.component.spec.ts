import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologicalSafetyComponent } from './psychological-safety.component';

describe('PsychologicalSafetyComponent', () => {
  let component: PsychologicalSafetyComponent;
  let fixture: ComponentFixture<PsychologicalSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologicalSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologicalSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
