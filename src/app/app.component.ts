import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Store } from '@ngrx/store';
import * as CoursesActions from './Redux/courses.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CoursesDashboard';

  private readonly store = inject(Store);

  ngOnInit() {
    this.store.dispatch(CoursesActions.getCourses());
  }
}
