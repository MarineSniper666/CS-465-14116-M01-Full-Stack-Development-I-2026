import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.apiBaseUrl}/login`, {
      email: email,
      password: password
    });
  }
}