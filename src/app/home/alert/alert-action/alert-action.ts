import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputConfig, MultiSelectConfig, SearchConfig, SingleSelectConfig } from 'cats-ui-lib';

@Component({
  selector: 'app-alert-action',
  imports: [ReactiveFormsModule],
  templateUrl: './alert-action.html',
  styleUrl: './alert-action.scss',
})
export class AlertAction {
  alertACtionForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.alertACtionForm = this.fb.group({
      alertAction: [],
      order: '',
      wait: '',
      auto: '',
    });
  }

  onSubmit() {
    if (this.alertACtionForm.valid) {
      console.log(this.alertACtionForm.value);
      this.router.navigate(['alert/review']);
    } else {
      this.alertACtionForm.markAllAsTouched();
    }
  }

  close() {
    this.router.navigate(['alert/alertConf']);
  }
  inputConfig: InputConfig = {
    type: 'text',
    placeholder: 'Enter value',
  };

  onInputSelection(selected: any) {
    const selectedType = selected?.value;
    this.inputConfig = {
      ...this.inputConfig,
      type: selectedType,
    };
  }

  singleConfig: SingleSelectConfig = {
    idField: 'id',
    textField: 'name',
    disabledField: 'disable',
    placeholder: 'Select Option',
    // prefixLabel: 'mutisekkk',
  };
  // multiSelectConfig: MultiSelectConfig = {
  //   idField: 'id',
  //   textField: 'name',
  //   disabledField: 'disable',
  //   placeholder: 'Select Option',
  //   // prefixLabel: 'mutisekkk',
  //   enableSearch: true,
  //   chipLimit: 2,
  //   selectAll: true,
  //   required: false,
  // };
  // searchConfig: SearchConfig = {
  //   serachValue: '',
  //   placeholder: 'Search Here',
  // };
}
