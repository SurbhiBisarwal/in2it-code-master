import { Component } from '@angular/core';
import { SnackbarService } from '../../../snack-bar-comp/snackBarService';
import { Router } from '@angular/router';
import { homeSer } from '../../homeSer';

@Component({
  selector: 'app-connection-detail',
  imports: [],
  templateUrl: './connection-detail.html',
  styleUrl: './connection-detail.scss',
})
export class ConnectionDetail {
  employee: any;

  constructor(
    private snackBar: SnackbarService,
    private router: Router,
    private service: homeSer
  ) {}

  ngOnInit() {
    this.employee = history.state.employee;

    if (!this.employee) {
      this.router.navigate(['/connection']);
      return;
    }
  }
  onUpdate() {
    // navigate back to the list and open the form for this employee
    this.router.navigate(['/connection'], { state: { employee: this.employee } });
  }

  onDelete() {
    // remove immediately and show simple toast
    this.service.deleteEmployee(this.employee.id);
    this.snackBar.open({ toastData: 'Employee deleted', type: 'delete' });
    this.router.navigate(['./connection']);
  }
}
