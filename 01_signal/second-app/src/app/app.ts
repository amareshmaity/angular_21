import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('second-app');

  // Signal
  count = signal(0);

  // Computed signal: Calculate for even or odd
  isEven = computed(() => this.count() % 2 === 0)

  // Increase the value of count
  increment() {
    this.count.set(this.count() + 1)
  }
  // Increase the value of count
  decrement() {
    this.count.set(this.count() - 1)
  }

}
