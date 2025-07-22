// Редаговано
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ApiKeyService } from './services/api-key.service';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteInputComponent } from './components/note-input/note-input.component';
import { NoteResultComponent } from './components/note-result/note-result.component';
import { ApiKeyComponent } from './components/api-key/api-key.component';
import { NoteChatComponent } from './components/note-chat/note-chat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ 
    CommonModule,
    NoteListComponent, 
    NoteInputComponent,  
    NoteResultComponent, 
    ApiKeyComponent,
    NoteChatComponent 
  ]
})
export class AppComponent {
  constructor(public apiKeyService: ApiKeyService) {}

  get hasKey(): boolean {
    return !!this.apiKeyService.getApiKey();
  }
}


