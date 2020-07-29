import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { loginUrl, registerUrl, userDetailsUrl } from '../config/api';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Register } from '../models/register';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}

  login(auth: Auth): Observable<any> {
    const body = JSON.stringify(auth);

    return this.http.post<any>(loginUrl, body, {
      headers: this.headers,
    });
  }

  register(register: Register): Observable<any> {
    const body = JSON.stringify(register);
    return this.http.post<any>(registerUrl, body, {
      headers: this.headers,
    });
  }

  getUserProfile(): Observable<any> {
    return this.http.get<any>(userDetailsUrl);
  }
}
