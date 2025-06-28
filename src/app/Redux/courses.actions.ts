import { createAction, props } from '@ngrx/store';
import { Course } from '../libs/types';

export const getCourses = createAction('[courses] Get all Courses');

export const getCoursesSuccess = createAction(
  '[courses] Courses getted succesfully',
  props<{ courses: Course[] }>()
);

export const getCoursesFailed = createAction(
  '[courses] Courses getted failed',
  props<{ error: string }>()
);

export const addCourse = createAction(
  '[courses] Add a new course',
  props<{ course: Course }>()
);

export const addCourseSuccess = createAction(
  '[courses] Add Course Success',
  props<{ message: string }>()
);

export const addCourseFailed = createAction(
  '[courses] Add Course Failed',
  props<{ error: string }>()
);

export const removeCourse = createAction(
  '[courses] Remove Course',
  props<{ courseId: number }>()
);

export const removeCourseSuccess = createAction(
  '[courses] Remove Course Success',
  props<{ message: string }>()
);

export const removeCourseFailed = createAction(
  '[courses] Remove Course Failed',
  props<{ error: string }>()
);

export const updateCourse = createAction(
  '[courses] Update Course',
  props<{ course: Course }>()
);

export const updateCourseSuccess = createAction(
  '[courses] Update Course Success',
  props<{ message: string }>()
);

export const updateCourseFailed = createAction(
  '[courses] Update Course Failed',
  props<{ error: string }>()
);

export const clearStatus = createAction('[Courses] Clear status');
