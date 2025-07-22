import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';

@Component({
  standalone: true,
  selector: 'app-note-result',
  templateUrl: './note-result.component.html',
  styleUrls: ['./note-result.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class NoteResultComponent {
  constructor(public noteService: NoteService) {}
}