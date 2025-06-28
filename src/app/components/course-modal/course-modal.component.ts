import { Component, output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Course } from '../../libs/types';

@Component({
  selector: 'app-course-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './course-modal.component.html',
  styleUrl: './course-modal.component.css',
})
export class CourseModalComponent {
  add = output<Omit<Course, 'id'>>();
  closed = output();

  readonly form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.add.emit(this.form.value);
      this.form.reset();
      this.closed.emit();
    }
  }

  cancel() {
    this.closed.emit();
    this.form.reset();
  }
}
