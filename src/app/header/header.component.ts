import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <h1>{{ title }}</h1>
    <p [class.red]="isRed">This is Some text</p>
    <button (click)="change()">Click Me</button>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'My Notes';
  isRed = false;

  change() {
    this.isRed = !this.isRed;
  }
}
