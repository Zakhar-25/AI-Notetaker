import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiKeyService } from '../../services/api-key.service';

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ApiKeyComponent {
  apiKey: string = '';

  constructor(private apiKeyService: ApiKeyService) {
    this.apiKey = this.apiKeyService.getApiKey() ?? '';
  }

  saveKey() {
    this.apiKeyService.setApiKey(this.apiKey);
  }
}


