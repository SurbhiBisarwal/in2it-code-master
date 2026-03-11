import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionDetail } from './connection-detail';

describe('ConnectionDetail', () => {
  let component: ConnectionDetail;
  let fixture: ComponentFixture<ConnectionDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectionDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
