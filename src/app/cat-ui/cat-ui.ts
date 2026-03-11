import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {
  // SingleSelectComponent,
  MultiSelectComponent,
  AutoCompleteMultiSelectComponent,
  AutoCompleteSingleSelectComponent,
  AutoCompleteSingleSelectConfig,
  CheckboxButtonComponent,
  InputComponent,
  InputConfig,
  MultiSelectConfig,
  RadioButtonComponent,
  RadioButtonConfig,
  SearchBoxComponent,
  ToggleConfig,
  ToogleButtonComponent,
  DateTimePickerComponent,
  DateConfig,
  CatsUiTooltipDirective,
  AccordionComponent,
  AccordionItemComponent,
  SingleSelectConfig,
  SearchConfig,
  AutoCompleteMultiSelectConfig,
  CheckBoxConfig,
  TabComponent,
  SingleSelectComponent,
  TabContentDirective,
  TabHeadingDirective,
  TabItemComponent,
} from 'cats-ui-lib';

@Component({
  selector: 'app-cat-ui',
  imports: [
    RouterOutlet,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
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
  ],
  templateUrl: './cat-ui.html',
  styleUrl: './cat-ui.scss',
})
export class CatUi {
  constructor(private fb: FormBuilder) {}
  form!: FormGroup;
  title = 'component-testing';
  name: string = '';

  // Options according to your idField, textField, disabledField
  typelist = [
    { id: 1, name: 'Text', value: 'text', disable: false },
    { id: 2, name: 'Email', value: 'email', disable: false },
    { id: 3, name: 'Password', value: 'password', disable: false },
    { id: 4, name: 'Number', value: 'number', disable: false },
  ];

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
    prefixLabel: 'mutisekkk',
  };
  ngOnInit() {
    this.form = this.fb.group({
      multiselect: [[]], // array because multi-select
    });
    this.form.get('multiselect')?.valueChanges.subscribe((val) => {
      console.log('Selected from form:', val);
    });
  }
  @ViewChild('picker')
  picker!: DateTimePickerComponent;

  openDate() {
    setTimeout(() => {
      this.picker.toggleCalendar();
      console.log(this.picker);
    });
  }

  onSelection(dt: any) {
    console.log('Selected from dropdown:', dt);
    console.log('Selected from form:', this.form.value);
  }

  multiSelectConfig: MultiSelectConfig = {
    idField: 'id',
    textField: 'name',
    disabledField: 'disable',
    placeholder: 'Select Option',
    prefixLabel: 'mutisekkk',
    enableSearch: true,
    chipLimit: 2,
    selectAll: true,
    required: false,
  };
  searchConfig: SearchConfig = {
    serachValue: '',
    placeholder: 'Search Here',
  };
  autoSingleSelectConfig: AutoCompleteSingleSelectConfig = {
    idField: 'id',
    textField: 'name',
    disabledField: '',
    placeholder: 'Enter or select',
    required: false,
    customInput: true,
  };
  autoMultiSelectConfig: AutoCompleteMultiSelectConfig = {
    idField: 'id',
    textField: 'name',
    selectAll: true,
    placeholder: 'Enter or Select',
    disabledField: 'disable',
    chipLimit: 2,
    customInput: true,
  };
  toggleConfig: ToggleConfig = {
    disabled: false,
    checked: false,
  };
  onToggled(data: any) {
    console.log('onToggled', data);
  }
  checkBoxConfig: CheckBoxConfig = {
    idField: 'id',
    textField: 'name',
    name: 'check23',
    disabledField: 'disable',
  };
  taskOptions = [
    {
      id: '101',
      name: 'Parent Task 1',
      disable: true,
    },
    {
      id: '102',
      name: 'Parent Task 2',
      subtasks: [],
    },
  ];

  // selectedOptions = ['sub1', '102'];
  checkBox(data: any) {
    console.log('oncheckBoxConfiged', data);
  }

  radioConfig: RadioButtonConfig = {
    valueField: 'id',
    textField: 'name',
    name: 'gender',
    disabled: 'disable',
  };
  radioConfig1: RadioButtonConfig = {
    valueField: 'id',
    textField: 'name',
    name: 'gemderdd',
  };
  option = [
    { id: 1, name: 'test23', disable: true },
    { id: 2, name: 'hellsso' },
    { id: 3, name: 'how' },
    { id: 4, name: 'hello' },
  ];
  // selectedRadio = 'hello';
  onradio(data: any) {
    console.log('rdio', data);
  }

  keyUp(data: any) {
    console.log('keyUp', data);
  }
  keyDown(data: any) {
    console.log('keyDown', data);
  }
  searchParamValue(data: any) {
    console.log('searchParamValue', data);
  }

  onDatetimeSelected(data: any) {
    console.log('onDatetimeSelected', data);
  }
  dateTimeRangeConfig: DateConfig = {
    selectionMode: 'range',
    enableTime: true,
  };
  dateConfig: DateConfig = {
    selectionMode: 'single',
    enableTime: false,
  };
  selectDate = {
    // start: '2025/11/06',
    // end: '2025/11/15',
  };
  maxDate: string = new Date().toLocaleDateString();

  selectedTab = 0;

  onTabSelected(index: number) {
    this.selectedTab = index;
    console.log('Selected tab index:', index);
  }
  tabs = [
    { heading: 'Home', content: 'Home content' },
    { heading: 'Profile', content: 'Profile content' },
  ];
  activeTabIndex: number = 0;
  disabledTabs: number[] = [1]; // Disable Profile tab initially (optional)

  closeTab(index: number) {
    // Prevent from closing the last tab or a disabled tab
    if (this.tabs.length > 1) {
      this.tabs.splice(index, 1);

      // Adjust activeTabIndex if needed
      if (this.activeTabIndex >= this.tabs.length) {
        this.activeTabIndex = this.tabs.length - 1;
      }
    }
  }
}
