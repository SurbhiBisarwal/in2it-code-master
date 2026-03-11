import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertReview } from './alert-review';

describe('AlertReview', () => {
  let component: AlertReview;
  let fixture: ComponentFixture<AlertReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertReview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertReview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
