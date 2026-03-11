import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';

import { AdepterForm } from './adepter-form';

describe('AdepterForm', () => {
  let component: AdepterForm;
  let fixture: ComponentFixture<AdepterForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdepterForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdepterForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('patches the form when studentData input is set', () => {
    component.studentData = {
      id: 42,
      name: 'Snapshot',
      age: 25,
      grade: 'B',
      course: 'Math',
      email: 'snap@example.com',
    } as any;
    component.ngOnChanges({
      studentData: new SimpleChange(null, component.studentData, false),
    });
    fixture.detectChanges();

    expect(component.adepterForm.value.name).toBe('Snapshot');
    expect(component.adepterForm.value.email).toBe('snap@example.com');
  });

  it('emits closed when close() is called', () => {
    spyOn(component.closed, 'emit');
    component.close();
    expect(component.closed.emit).toHaveBeenCalled();
  });
});
