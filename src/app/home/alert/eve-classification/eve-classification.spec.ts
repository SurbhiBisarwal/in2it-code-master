import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveClassification } from './eve-classification';

describe('EveClassification', () => {
  let component: EveClassification;
  let fixture: ComponentFixture<EveClassification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EveClassification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EveClassification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
