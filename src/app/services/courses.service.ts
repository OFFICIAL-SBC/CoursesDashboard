import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Course } from '../libs/types';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8084/course';

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  addCourse(newCourse: Course) {
    return this.http.post<Course>(this.apiUrl, newCourse).pipe(
      catchError((error) => {
        console.error('The error is', error);
        throw new Error('An error has occurred');
      })
    );
  }

  updateCourse(course: Course) {
    return this.http.put<Course>(this.apiUrl, course).pipe(
      catchError((error) => {
        console.error('The error is', error);
        throw new Error('An error has occurred');
      })
    );
  }

  deleteCourse(courseId: number) {
    return this.http.delete(`${this.apiUrl}/${courseId}`).pipe(
      catchError((error) => {
        console.error('The error is', error);
        throw new Error('An error has occurred');
      })
    );
  }
}
