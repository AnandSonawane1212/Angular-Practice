import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAndMarksComponent } from './review-and-marks.component';

describe('ReviewAndMarksComponent', () => {
  let component: ReviewAndMarksComponent;
  let fixture: ComponentFixture<ReviewAndMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAndMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAndMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
