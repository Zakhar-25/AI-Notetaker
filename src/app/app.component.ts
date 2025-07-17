import { Component } from '@angular/core';
import { ApiKeyService } from './services/api-key.service';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteInputComponent } from './components/note-input/note-input.component';
import { NoteResultComponent } from './components/note-result/note-result.component';
import { ApiKeyComponent } from './components/api-key/api-key.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ 
    NoteListComponent, NoteInputComponent,  NoteResultComponent, 
    ApiKeyComponent]
})
export class AppComponent {
  constructor(public apiKeyService: ApiKeyService) {}

  get hasKey(): boolean {
    return !!this.apiKeyService.getApiKey();
  }
}

