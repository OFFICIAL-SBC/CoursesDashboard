import { CoursesService } from '../services/courses.service';
import * as CoursesActions from './courses.actions';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Course } from '../libs/types';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class CoursesEffects {
  actions$ = inject(Actions);
  coursesService = inject(CoursesService);

  getAllCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.getCourses),
      mergeMap(() =>
        this.coursesService.getAllCourses().pipe(
          map((courses) => CoursesActions.getCoursesSuccess({ courses })),
          catchError((error) => of(CoursesActions.getCoursesFailed({ error })))
        )
      )
    )
  );

  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.addCourse),
      mergeMap((action: { course: Course }) =>
        this.coursesService.addCourse(action.course).pipe(
          map(() =>
            CoursesActions.addCourseSuccess({
              message: 'Course added successfully',
            })
          ),
          catchError((error) => of(CoursesActions.addCourseFailed({ error })))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.removeCourse),
      // !! ✅ exhaustMap prevents concurrent delete requests for the same user
      exhaustMap((action: { courseId: number }) =>
        this.coursesService.deleteCourse(action.courseId).pipe(
          map(() =>
            CoursesActions.removeCourseSuccess({
              message: 'Course deleted successfully',
            })
          ),
          catchError((error) =>
            of(CoursesActions.removeCourseFailed({ error }))
          )
        )
      )
    )
  );

  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.updateCourse),
      exhaustMap((action: { course: Course }) =>
        this.coursesService.updateCourse(action.course).pipe(
          map(() =>
            CoursesActions.updateCourseSuccess({
              message: 'The course has been updated successfully',
            })
          ),
          catchError((error) =>
            of(CoursesActions.updateCourseFailed({ error }))
          )
        )
      )
    )
  );
}
