import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OpenAiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendMessage(prompt: string, apiKey: string): Observable<any> {
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    };

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
