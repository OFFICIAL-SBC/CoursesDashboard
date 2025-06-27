import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from '../libs/types';
import { coursesFeatureKey } from './courses.reducer';

// In this line we are getting the courses state from the store
export const selectCoursesState =
  createFeatureSelector<CoursesState>(coursesFeatureKey);

export const selectCourses = createSelector(selectCoursesState, (state) => {
  return state.courses;
});

export const selectLoadingIndicator = createSelector(
  selectCoursesState,
  (state) => state.loading
);

export const getErrorMessage = createSelector(
  selectCoursesState,
  (state) => state.error
);

export const getSuccessMessage = createSelector(
  selectCoursesState,
  (state) => state.success
);
