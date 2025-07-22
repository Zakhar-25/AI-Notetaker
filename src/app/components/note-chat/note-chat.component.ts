import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OpenAiService } from '../../services/open-ai.service';
import { ApiKeyService } from '../../services/api-key.service';

@Component({
  selector: 'app-note-chat',
  templateUrl: './note-chat.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class NoteChatComponent {
  openAiService = inject(OpenAiService);
  apiKeyService = inject(ApiKeyService);

  message = '';
  messages = signal<{ user: string; ai: string }[]>([]);

  send() {
    const apiKey = this.apiKeyService.getApiKey();
    if (!apiKey || !this.message.trim()) return;

    const userMsg = this.message;
    this.message = '';
    this.messages.update(msgs => [...msgs, { user: userMsg, ai: '...' }]);

    this.openAiService.sendMessage(userMsg, apiKey).subscribe({
      next: (res) => {
        const aiReply = res?.choices?.[0]?.message?.content || '(No response)';
        this.messages.update(msgs => {
          const updated = [...msgs];
          updated[updated.length - 1].ai = aiReply;
          return updated;
        });
      },
      error: (err) => {
        this.messages.update(msgs => {
          const updated = [...msgs];
          updated[updated.length - 1].ai = '(Error)';
          return updated;
        });
        console.error('AI request failed:', err);
      }
    });
  }
}

