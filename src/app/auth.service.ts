import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register( username: string, email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/register', {username, email, password });
  }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/login', { username, password });
  }
}
