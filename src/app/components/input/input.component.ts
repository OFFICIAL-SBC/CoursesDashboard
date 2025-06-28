import { Component, signal, effect, output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  readonly searchTerm = signal('');
  searchTermOutout = output<string>();

  // 3. Sincroniza el estado interno con la salida
  private _forward = effect(() => {
    this.searchTermOutout.emit(this.searchTerm()); // se dispara cada vez que `searchTerm` cambia
  });
}
