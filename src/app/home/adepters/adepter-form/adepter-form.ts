import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { homeSer, Student, NewStudent } from '../../homeSer';
import { SnackbarService } from '../../../snack-bar-comp/snackBarService';

@Component({
  selector: 'app-adepter-form',
  imports: [ReactiveFormsModule],
  templateUrl: './adepter-form.html',
  styleUrl: './adepter-form.scss',
})
export class AdepterForm implements OnChanges {

  @Input() studentData?: Student;
  @Output() closed = new EventEmitter<void>();

  adepterForm: FormGroup
  constructor(private router: Router, private fb: FormBuilder, private service: homeSer, private snackBar: SnackbarService,) {
    this.adepterForm = this.fb.group({
      name: ['', { validators: [Validators.required] }],
      grade: ['', { validators: [Validators.required] }],
      age: ['', { validators: [Validators.required, Validators.min(0)] }],
      course: ['', { validators: [Validators.required] }],
      email: ['', { validators: [Validators.required, Validators.email] }],

    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['studentData'] && this.studentData) {
      this.adepterForm.patchValue(this.studentData);
    }
  }
  close() {
    this.closed.emit();
    if (!this.studentData) {
      this.router.navigate(['/adapter']);
    }
  }
  onSubmit() {
    if (this.adepterForm.valid) {
      const formData = this.adepterForm.value;
      console.log('Form Data:', formData);
      const safeName = formData.name.replace(/\s+/g, '');
      if (this.studentData && this.studentData.id) {
        // update existing record
        this.service.updateStudent(this.studentData.id, formData);
        this.snackBar.open({
          toastData: `${formData.name} updated successfully`,
          type: 'success',
          buttonText: ['view', 'home'],
          router: {
            view: ['/adapter', safeName],
            home: ['/adapter']
          },
          navigationExtras: {
            view: { state: { student: formData } }
          }
        });
      } else {
        // add new
        this.service.addStudent(formData as NewStudent);
        this.snackBar.open({
          toastData: `${formData.name} added successfully`,
          type: 'success',
          buttonText: ['view'],
          router: {
            view: ['/adapter', safeName],
          },
          navigationExtras: { state: { student: formData } }
        });
      }
      this.closed.emit();
    } else {
      this.snackBar.open({ toastData: 'Please fill in all required fields', type: 'warning' });
    }
  }
}





