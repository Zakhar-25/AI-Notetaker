import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
}