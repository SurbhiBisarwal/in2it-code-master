import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';

import { ConnectionForm } from './connection-form';

describe('ConnectionForm', () => {
  let component: ConnectionForm;
  let fixture: ComponentFixture<ConnectionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectionForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('patches the form when employeeData input is set', () => {
    component.employeeData = {
      id: 7,
      name: 'Alice',
      age: 30,
      department: 'Dev',
      position: 'Engineer',
      salary: 90000,
      email: 'alice@example.com',
    } as any;
    component.ngOnChanges({
      employeeData: new SimpleChange(null, component.employeeData, false),
    });
    fixture.detectChanges();

    expect(component.connectionForm.value.name).toBe('Alice');
    expect(component.connectionForm.value.email).toBe('alice@example.com');
  });

  it('emits closed when close() is called', () => {
    spyOn(component.closed, 'emit');
    component.close();
    expect(component.closed.emit).toHaveBeenCalled();
  });
});
