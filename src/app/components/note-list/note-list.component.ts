import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';


@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styles: [':host { width: 25%; min-width: 200px; }']
})
export class NoteListComponent {
  noteService = inject(NoteService);
}

export class NoteInputComponent {}