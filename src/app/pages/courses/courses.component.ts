import { Component, inject, OnInit } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { Store } from '@ngrx/store';
import { selectCourses } from '../../Redux/courses.selector';
import { Subject, takeUntil } from 'rxjs';
import { Course } from '../../libs/types';

@Component({
  selector: 'app-courses',
  imports: [ListComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  private readonly destroy$ = new Subject<void>();
  private readonly store = inject(Store);

  coursesList$ = this.store.select(selectCourses);
  coursesList: Course[] = [];

  ngOnInit() {
    // Solo si realmente necesitas lógica imperativa:
    this.coursesList$.pipe(takeUntil(this.destroy$)).subscribe((courses) => {
      this.coursesList = courses;
      console.log('Courses List:', this.coursesList);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
