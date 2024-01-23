import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <h1>Header Component!</h1>
    <p>This is Header Paragraph</p>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
