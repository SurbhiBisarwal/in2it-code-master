import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { homeSer, Employee, NewEmployee } from '../../homeSer';
import { SnackbarService } from '../../../snack-bar-comp/snackBarService';

@Component({
  selector: 'app-connection-form',
  imports: [ReactiveFormsModule],
  templateUrl: './connection-form.html',
  styleUrl: './connection-form.scss',
})
export class ConnectionForm implements OnChanges {

  @Input() employeeData?: Employee;
  @Output() closed = new EventEmitter<void>();

  connectionForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: homeSer,
    private snackBar: SnackbarService
  ) {
    this.connectionForm = this.fb.group({
      name: ['', { validators: [Validators.required] }],
      department: ['', { validators: [Validators.required] }],
      position: ['', { validators: [Validators.required] }],
      age: ['', { validators: [Validators.required, Validators.min(0)] }],
      salary: ['', { validators: [Validators.min(0)] }],
      email: ['', { validators: [Validators.required, Validators.email] }],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['employeeData'] && this.employeeData) {
      this.connectionForm.patchValue(this.employeeData as any);
    }
  }

  close() {
    this.closed.emit();
    if (!this.employeeData) {
      this.router.navigate(['/connection']);
    }
  }

  onSubmit() {
    if (this.connectionForm.valid) {
      const formData = this.connectionForm.value;
      const safeName = formData.name.replace(/\s+/g, '');

      if (this.employeeData && this.employeeData.id) {
        this.service.updateEmployee(this.employeeData.id, formData as Partial<NewEmployee>);
        const employeeWithId = { ...formData, id: this.employeeData.id };
        this.snackBar.open({
          toastData: `${formData.name} updated successfully`,
          type: 'success',
          buttonText: ['view', 'home'],
          router: {
            view: ['/connection', safeName],
            home: ['/connection'],
          },
          navigationExtras: { state: { employee: employeeWithId } },
        });
      } else {
        const newEmployee = this.service.addEmployee(formData as NewEmployee);
        this.snackBar.open({
          toastData: `${formData.name} added successfully`,
          type: 'success',
          buttonText: ['view'],
          router: {
            view: ['/connection', safeName],
          },
          navigationExtras: { state: { employee: newEmployee } },
        });
      }

      this.closed.emit();
    } else {
      this.snackBar.open({ toastData: 'Please fill in all required fields', type: 'warning' });
    }
  }
}
