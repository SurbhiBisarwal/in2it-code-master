import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatUi } from './cat-ui';

describe('CatUi', () => {
  let component: CatUi;
  let fixture: ComponentFixture<CatUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
