import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterDetail } from './adapter-detail';

describe('AdapterDetail', () => {
  let component: AdapterDetail;
  let fixture: ComponentFixture<AdapterDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdapterDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdapterDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
