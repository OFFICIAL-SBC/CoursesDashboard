import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesService } from './services/courses.service';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CoursesDashboard';

  service = inject(CoursesService);

  ngOnInit() {
    this.service.getAllCourses().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
    });
  }
}
