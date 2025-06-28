import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {
  message = input.required<string>();
  type = input.required<'success' | 'error'>();
  close = output<void>();
}
