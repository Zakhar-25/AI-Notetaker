import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-input.component.html',
  styles: [':host { width: 50%; }']
})
export class NoteInputComponent {
  noteService = inject(NoteService);
  input = '';

  addNote() {
    if (this.input.trim()) {
      this.noteService.addNote(this.input);
      this.input = '';
    }
  }
}