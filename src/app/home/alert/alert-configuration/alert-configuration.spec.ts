import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertConfiguration } from './alert-configuration';

describe('AlertConfiguration', () => {
  let component: AlertConfiguration;
  let fixture: ComponentFixture<AlertConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
