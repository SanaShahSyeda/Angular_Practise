import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { NotesListComponent } from './notes-list/notes-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    HeaderComponent,
    NotesListComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login() {
    alert(
      this.loginForm.value.username + ' | ' + this.loginForm.value.password
    );
  }
}
