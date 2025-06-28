import { Component, input, InputSignal, output } from '@angular/core';
import { Course } from '../../libs/types';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  coursesList: InputSignal<Course[]> = input<Course[]>([]);
  page: InputSignal<string> = input.required<string>();
  deleteCourseId = output<number>();

  deleteCourse(id: number): void {
    this.deleteCourseId.emit(id);
  }
}
