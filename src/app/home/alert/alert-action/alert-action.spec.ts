import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAction } from './alert-action';

describe('AlertAction', () => {
  let component: AlertAction;
  let fixture: ComponentFixture<AlertAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
