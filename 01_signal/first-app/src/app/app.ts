import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('First angular app showing use of signal');
  
  // Declair a signal
  count = signal(0)

  // Print the initial value of the signal
  // consturctor is a special function in angular and it is immediately call as soon as the component is created
  constructor() {
    console.log('The initial value of the count:', this.count())
  }

  // Set the value of signal as 5
  changeValue() {
    this.count.set(5)
  }

  // Increase the value of the signal by 1
  increment() {
    this.count.update((value) => value+1)
  }
}
