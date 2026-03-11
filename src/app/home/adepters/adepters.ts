import { Component, computed, signal, Signal } from '@angular/core';
import { CatsDataGridComponent } from 'cats-data-grid';
import { Router } from '@angular/router';
import { homeSer } from '../homeSer';
import { SnackbarService } from '../../snack-bar-comp/snackBarService';
import { AdepterForm } from './adepter-form/adepter-form';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-adepters',
  imports: [CatsDataGridComponent, AdepterForm, NgTemplateOutlet],
  templateUrl: './adepters.html',
  styleUrl: './adepters.scss',
})
export class Adepters {
  students!: Signal<any[]>;
  showForm = signal(false);
  currentStudent: any = null;

  ngOnInit() {
    const deletedId = history.state.deletedId;

    if (deletedId) {
      this.searchService.deleteStudent(deletedId);
    }
  }

  constructor(
    private searchService: homeSer,
    private router: Router,
    private snackBar: SnackbarService,

  ) {
    this.students = this.searchService.students;
  }
  coldef: any[] = [
    {
      fieldName: 'id',
      headerName: 'ID'
    },
    {
      fieldName: 'name',
      headerName: 'Name'
    },
    {
      fieldName: 'grade',
      headerName: 'Grade'
    },
    {
      fieldName: 'age',
      headerName: 'Age'
    },
    {
      fieldName: 'course',
      headerName: 'Course'
    },
    {
      fieldName: 'email',
      headerName: 'Email'
    },

  ]


  filteredRows = computed(() => {
    const search = this.searchService.searchText().toLowerCase();
    const rows = this.students();
    if (!search) return rows;
    return rows.filter((row: any) =>
      Object.values(row).some((value: any) =>
        value.toString().toLowerCase().includes(search)
      )
    );
  });

  onclick() {
    // open blank form template for new record
    this.currentStudent = null;
    this.showForm.set(true);
  }

  rowData: any[] = []
  onSelectedRows(rows: any[]) {
    console.log(rows);
    this.rowData = rows;
  }

  onDelete() {
    console.log('delete');
    if (this.rowData.length > 0) {
      const deletedIds = this.rowData.map((row) => row.id);
      this.searchService.deleteStudents(deletedIds);
      this.snackBar.open({ toastData: 'Selected rows deleted successfully', type: 'success' });
    } else {
      this.snackBar.open({ toastData: 'No rows selected for deletion', type: 'error' });
    }
  }

  onUpdate() {
    if (this.rowData && this.rowData.length > 0) {
      this.currentStudent = this.rowData[0];
      this.showForm.set(true);
    }
  }

  viewDetails() {
    if (this.rowData && this.rowData.length > 0) {
      const name = this.rowData[0].name.replace(/\s+/g, ''); // removes ALL spaces
      this.router.navigate(['/adapter', name], {
        state: { student: this.rowData[0] }
      });
    }
  }


  onFormClosed() {
    this.showForm.set(false);
  }
}

