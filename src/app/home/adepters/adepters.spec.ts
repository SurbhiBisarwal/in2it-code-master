import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adepters } from './adepters';

describe('Adepters', () => {
  let component: Adepters;
  let fixture: ComponentFixture<Adepters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adepters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adepters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onclick opens a blank inline form', () => {
    component.currentStudent = {id: 99}; // kickstart with something
    component.onclick();
    expect(component.showForm()).toBeTrue();
    expect(component.currentStudent).toBeNull();
  });

  it('onUpdate shows form with selected student data', () => {
    component.rowData = [{ id: 5, name: 'John Doe', age: 30, grade: 'A', course: 'CS', email: 'j@d.com' }];
    component.onUpdate();
    expect(component.showForm()).toBeTrue();
    expect(component.currentStudent.name).toBe('John Doe');
  });

  it('onFormClosed hides the form', () => {
    component.showForm.set(true);
    component.onFormClosed();
    expect(component.showForm()).toBeFalse();
  });
});
