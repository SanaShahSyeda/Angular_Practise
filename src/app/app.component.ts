import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { NotesListComponent } from './notes-list/notes-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NotesListComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = new FormControl('James');

  showName() {
    alert(this.name.value);
  }
}
