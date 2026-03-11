import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import {
  InputComponent,
  SearchBoxComponent,
  AutoCompleteSingleSelectComponent,
  SingleSelectComponent,
  AutoCompleteMultiSelectComponent,
  ToogleButtonComponent,
  CheckboxButtonComponent,
  RadioButtonComponent,
  MultiSelectComponent,
  DateTimePickerComponent,
  CatsUiTooltipDirective,
  AccordionComponent,
  AccordionItemComponent,
  TabComponent,
  TabContentDirective,
  TabHeadingDirective,
  TabItemComponent,
  InputConfig,
  SingleSelectConfig,
  MultiSelectConfig,
  SearchConfig,
  DateConfig,
} from 'cats-ui-lib';

@Component({
  selector: 'app-alert-configuration',
  imports: [
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    SingleSelectComponent,
    MultiSelectComponent,
    DateTimePickerComponent,
  ],
  templateUrl: './alert-configuration.html',
  styleUrl: './alert-configuration.scss',
})
export class AlertConfiguration {
  alertForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.alertForm = this.fb.group({
      alertName: ['', Validators.required],
      category: ['', Validators.required],
      lowLevelCategory: ['', Validators.required],
      groupBy: ['', Validators.required],
      mitreAttack: [],
      service: [],
      severity: ['', Validators.required],
      associateCategory: ['', Validators.required],
      eventType: ['', Validators.required],
      alertWaitTime: [''],
      occurance: [''],
      subService: [],
      alertDescription: [''],
    });
  }

  onSubmit() {
    if (this.alertForm.valid) {
      console.log(this.alertForm.value);
      this.router.navigate(['alert/alertAction']);
    } else {
      this.alertForm.markAllAsTouched();
    }
  }

  isOpen: boolean = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.router.navigate(['/alert']);
  }
  categoryOptions = [
    { id: 1, name: 'Security' },
    { id: 2, name: 'Network' },
    { id: 3, name: 'Application' },
    { id: 4, name: 'Database' },
  ];
  lowLevelCategoryOptions = [
    { id: 1, name: 'Authentication Failure' },
    { id: 2, name: 'Port Scan' },
    { id: 3, name: 'SQL Injection' },
    { id: 4, name: 'Malware Detection' },
  ];
  groupByOptions = [
    { id: 1, name: 'Source IP' },
    { id: 2, name: 'User ID' },
    { id: 3, name: 'Service Name' },
    { id: 4, name: 'Event Type' },
  ];
  mitreAttackOptions = [
    { id: 1, name: 'Initial Access' },
    { id: 2, name: 'Execution' },
    { id: 3, name: 'Persistence' },
    { id: 4, name: 'Privilege Escalation' },
  ];
  serviceOptions = [
    { id: 1, name: 'Firewall' },
    { id: 2, name: 'SIEM' },
    { id: 3, name: 'Endpoint Security' },
    { id: 4, name: 'Cloud Monitor' },
  ];
  severityOptions = [
    { id: 1, name: 'Low' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'High' },
    { id: 4, name: 'Critical' },
  ];
  associateCategoryOptions = [
    { id: 1, name: 'Compliance' },
    { id: 2, name: 'Risk Management' },
    { id: 3, name: 'Audit' },
    { id: 4, name: 'Monitoring' },
  ];
  eventTypeOptions = [
    { id: 1, name: 'Login Attempt' },
    { id: 2, name: 'File Access' },
    { id: 3, name: 'Configuration Change' },
    { id: 4, name: 'Policy Violation' },
  ];
  subServiceOptions = [
    { id: 1, name: 'Email Security' },
    { id: 2, name: 'VPN Monitoring' },
    { id: 3, name: 'Cloud IAM' },
    { id: 4, name: 'Endpoint Detection' },
  ];
  // ----------------------------------------CATS UI ---------------------------------------------------------
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

  onSelection(dt: any) {
    // console.log('Selected from dropdown:', dt);
    // console.log('Selected from form:', this.form.value);
  }

  multiSelectConfig: MultiSelectConfig = {
    idField: 'id',
    textField: 'name',
    disabledField: 'disable',
    placeholder: 'Select Option',
    // prefixLabel: 'mutisekkk',
    enableSearch: true,
    chipLimit: 2,
    selectAll: true,
    required: false,
  };
  searchConfig: SearchConfig = {
    serachValue: '',
    placeholder: 'Search Here',
  };

  dateConfig: DateConfig = {
    selectionMode: 'single',
    enableTime: false,
  };
  onDatetimeSelected(data: any) {
    console.log('onDatetimeSelected', data);
  }
  // dateTimeRangeConfig: DateConfig = {
  //   selectionMode: 'range',
  //   enableTime: true,
  // };
  // selectDate = {
  //   start: '2025/11/06',
  //   end: '2025/11/15',
  // };
  // maxDate: string = new Date().toLocaleDateString();
}
