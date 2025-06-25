import { createReducer, on } from '@ngrx/store';
import * as CoursesActions from '../Redux/courses.actions';
import { initialCoursesState } from './courses.state';

export const coursesFeatureKey = 'courses';

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CoursesActions.getCourses, (state) => ({
    ...state,
    loading: true,
    error: null,
    success: null,
  })),
  on(CoursesActions.getCoursesSuccess, (state, { courses }) => ({
    ...state,
    loading: false,
    courses,
  })),
  on(CoursesActions.getCoursesFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(CoursesActions.addCourse, (state) => ({
    ...state,
    loading: true,
    error: null,
    success: null,
  })),
  on(CoursesActions.addCourseSuccess, (state, { message }) => ({
    ...state,
    loading: false,
    success: message,
  })),
  on(CoursesActions.addCourseFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(CoursesActions.removeCourse, (state) => ({
    ...state,
    loading: true,
    error: null,
    success: null,
  })),
  on(CoursesActions.removeCourseSuccess, (state, { message }) => ({
    ...state,
    loading: false,
    success: message,
  })),
  on(CoursesActions.removeCourseFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
