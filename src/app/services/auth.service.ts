import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';
import { HttpClient } from '@angular/common/http';
import {
  loginUrl,
  registerUrl,
  userDetailsUrl,
  refreshTokenUrl,
} from '../config/api';
import { Observable } from 'rxjs';
import { Register } from '../models/register';
import { OperationResult } from '../models/operation-result';
import { Router } from '@angular/router';
import { MessengerService } from './messenger.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = { 'content-type': 'application/json' };
  constructor(
    private http: HttpClient,
    private router: Router,
    private messengerService: MessengerService
  ) {}

  login(auth: Auth): Observable<OperationResult> {
    const body = JSON.stringify(auth);

    return this.http.post<OperationResult>(loginUrl, body, {
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

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');

    this.messengerService.sendMsgUserLogout();
    this.router.navigateByUrl('/login');
  }

  getNewAccessToken(): Observable<any> {
    return this.http.get<any>(refreshTokenUrl, {
      headers: {
        'content-type': 'application/json',
        jwtToken: localStorage.getItem('token'),
        refreshToken: localStorage.getItem('refreshToken'),
      },
    });
  }
}
