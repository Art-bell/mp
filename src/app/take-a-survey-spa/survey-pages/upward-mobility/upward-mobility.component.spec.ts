import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpwardMobilityComponent } from './upward-mobility.component';

describe('UpwardMobilityComponent', () => {
  let component: UpwardMobilityComponent;
  let fixture: ComponentFixture<UpwardMobilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpwardMobilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpwardMobilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
