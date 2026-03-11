import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../../snack-bar-comp/snackBarService';
import { homeSer } from '../../homeSer';

@Component({
  selector: 'app-adapter-detail',
  imports: [],
  templateUrl: './adapter-detail.html',
  styleUrl: './adapter-detail.scss',
})
export class AdapterDetail {
  student: any;

  constructor(
    private router: Router,
    private snackBar: SnackbarService,
    private route: ActivatedRoute,
    private service: homeSer
  ) {}

  ngOnInit() {
    // primary source of truth is navigation state passed from the previous page
    this.student = history.state.student;

    // if state was not provided (e.g. user clicked the "view" button on a
    // snackbar) attempt to look up the record using the route parameter so
    // that the component still works when navigation extras are dropped.
    if (!this.student) {
      const nameParam = this.route.snapshot.paramMap.get('name');
      if (nameParam) {
        const all = this.service.students();
        this.student = all.find(
          (s: any) => s.name.replace(/\s+/g, '') === nameParam
        );
      }
    }

    console.log('adapter detail student', this.student);
  }

  onUpdate() {
    this.router.navigate(['editAdepter']);
  }

  onDeleteStudent() {
    this.service.deleteStudent(this.student.id);
    this.snackBar.open({ toastData: 'Student deleted', type: 'delete' });
    this.router.navigate(['./adapter']);
  }

}
