import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  // templateUrl: './counter.component.html',
  template: `
    <h3> Mi contador: {{counter}} </h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    if (this.counter <= 0 && value === -1) return;
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
