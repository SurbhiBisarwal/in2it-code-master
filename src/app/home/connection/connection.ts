import { Component, computed, signal, Signal } from '@angular/core';
import { CatsDataGridComponent } from 'cats-data-grid';
import { Router } from '@angular/router';
import { homeSer } from '../homeSer';
import { SnackbarService } from '../../snack-bar-comp/snackBarService';
import { ConnectionForm } from './connection-form/connection-form';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-connection',
  imports: [CatsDataGridComponent, ConnectionForm, NgTemplateOutlet],
  templateUrl: './connection.html',
  styleUrl: './connection.scss',
})
export class Connection {
  employees!: Signal<any[]>;
  showForm = signal(false);
  currentEmployee: any = null;

  ngOnInit() {
    const deletedId = history.state.deletedId;

    if (deletedId) {
      this.searchService.deleteEmployee(deletedId);
    }

    // if an employee was passed along in navigation state, open the form for editing
    const emp = history.state.employee;
    if (emp) {
      this.currentEmployee = emp;
      this.showForm.set(true);
    }
  }

  constructor(
    private searchService: homeSer,
    private snackBar: SnackbarService,
    private router: Router
  ) {
    this.employees = this.searchService.employees;
  }

  coldef: any[] = [
    { fieldName: 'id', headerName: 'ID' },
    { fieldName: 'name', headerName: 'Name' },
    { fieldName: 'department', headerName: 'Department' },
    { fieldName: 'age', headerName: 'Age' },
    { fieldName: 'position', headerName: 'Position' },
    { fieldName: 'email', headerName: 'Email' },
    { fieldName: 'salary', headerName: 'Salary' },
  ];

  filteredRows = computed(() => {
    const search = this.searchService.searchText().toLowerCase();
    const rows = this.employees();
    if (!search) return rows;
    return rows.filter((row: any) =>
      Object.values(row).some((value: any) =>
        value.toString().toLowerCase().includes(search)
      )
    );
  });

  onclick() {
    // open blank form for new employee
    this.currentEmployee = null;
    this.showForm.set(true);
  }

  rowData: any[] = [];
  onSelectedRows(rows: any[]) {
    this.rowData = rows;
  }

  onDelete() {
    if (this.rowData.length > 0) {
      const deletedIds = this.rowData.map((row) => row.id);
      this.searchService.deleteEmployees(deletedIds);
      this.snackBar.open({ toastData: 'Selected rows deleted successfully', type: 'success' });
    } else {
      this.snackBar.open({ toastData: 'No rows selected for deletion', type: 'error' });
    }
  }

  onUpdate() {
    if (this.rowData && this.rowData.length > 0) {
      this.currentEmployee = this.rowData[0];
      this.showForm.set(true);
    }
  }

  viewDetails() {
    if (this.rowData && this.rowData.length > 0) {
      const name = this.rowData[0].name.replace(/\s+/g, '');
      this.router.navigate(['/connection', name], {
        state: { employee: this.rowData[0] },
      });
    }
  }

  onFormClosed() {
    this.showForm.set(false);
  }
}
