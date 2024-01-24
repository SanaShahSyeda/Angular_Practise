import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{ title }}</h1>
    <p [class.red]="isRed">This is Some text</p>
    <button (click)="change()">Click Me</button>
    <!-- Using *ngFor directive to iterate over 'items' array -->
    <div *ngFor="let item of items; trackBy: trackById">
      {{ item.name }}
    </div>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'My Notes';
  isRed = false;
  items: any[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  change() {
    this.isRed = !this.isRed;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
