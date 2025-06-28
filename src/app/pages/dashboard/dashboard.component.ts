import { Component, inject, OnInit } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { Store } from '@ngrx/store';
import * as CoursesSelectors from '../../Redux/courses.selector';
import { Course } from '../../libs/types';
import { InputComponent } from '../../components/input/input.component';
import * as CoursesActions from '../../Redux/courses.actions';
import { PopupComponent } from '../../components/popup/popup.component';
import { CommonModule } from '@angular/common';
import { CourseModalComponent } from '../../components/course-modal/course-modal.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    ListComponent,
    InputComponent,
    PopupComponent,
    CommonModule,
    CourseModalComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  private readonly store = inject(Store);
  coursesList$ = this.store.select(CoursesSelectors.selectCourses);
  readonly success$ = this.store.select(CoursesSelectors.getSuccessMessage);
  readonly error$ = this.store.select(CoursesSelectors.getErrorMessage);

  coursesList: Course[] = [];
  searchedCourses: Course[] = [];
  isAddModalOpen = false;

  ngOnInit(): void {
    this.coursesList$.subscribe((courses: Course[]) => {
      this.coursesList = courses;
      this.searchCourses('');
    });
  }

  searchCourses(searchTerm: string): void {
    this.searchedCourses = this.coursesList.filter((course: Course) => {
      return (
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    console.log(this.searchedCourses);
  }

  addCourse($event: Omit<Course, 'id'>) {
    this.store.dispatch(CoursesActions.addCourse({ course: $event }));
  }
  /** open/close modal */
  openAddModal() {
    this.isAddModalOpen = true;
  }
  closeAddModal() {
    this.isAddModalOpen = false;
  }

  deleteCourse($event: number) {
    this.store.dispatch(CoursesActions.removeCourse({ courseId: $event }));
  }

  onPopupClosed() {
    this.store.dispatch(CoursesActions.clearStatus());
    this.store.dispatch(CoursesActions.getCourses()); // Refresh the courses list after closing the popup
  }
}
