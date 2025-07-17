import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NoteService {
  notes = signal<string[]>([]);

  addNote(note: string) {
    this.notes.update(notes => [...notes, note]);
  }
}