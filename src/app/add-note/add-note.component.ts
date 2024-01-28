import { Component } from '@angular/core';
import { NOTES } from '../notes';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  standalone: true,
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css',
  imports: [ReactiveFormsModule],
})
export class AddNoteComponent {
  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
  });
  addNote() {
    // The nullish coalescing operator(??) is used to provide default values of an empty string ('') if the extracted values are null or undefined.
    let title = this.addNoteForm.value.title ?? '';
    let text = this.addNoteForm.value.text ?? '';

    if (this.addNoteForm.valid) {
      let ids = NOTES.map((a) => a.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newNote = {
        id: maxId + 1,
        title: title,
        text: text,
      };
      // adds the newNote object to the beginning of the NOTES array using the unshift method,
      //  effectively inserting it as the first element in the array.
      NOTES.unshift(newNote);
      this.addNoteForm.reset();
    }
  }
}
