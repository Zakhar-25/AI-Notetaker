import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiKeyService {
  private storageKey = 'openai_api_key';

  setApiKey(key: string): void {
    localStorage.setItem(this.storageKey, key);
  }

  getApiKey(): string | null {
    return localStorage.getItem(this.storageKey);
  }

  clearApiKey(): void {
    localStorage.removeItem(this.storageKey);
  }
}
