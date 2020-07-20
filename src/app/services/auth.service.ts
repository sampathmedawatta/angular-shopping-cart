import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { loginUrl, registerUrl, userDetailsUrl } from '../config/api';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}

  login(auth: Auth): Observable<Auth> {
    const body = JSON.stringify(auth);

    return this.http.post<Auth>(loginUrl, body, {
      headers: this.headers,
    });
  }

  register(register: User): Observable<User> {
    const body = JSON.stringify(register);

    return this.http.post<User>(registerUrl, body, {
      headers: this.headers,
    });
  }

  getUserProfile(): Observable<User> {
    return this.http.get<User>(userDetailsUrl);
  }
}
