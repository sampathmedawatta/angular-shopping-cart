import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  refreshingAccessToken: boolean;

  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token') != null) {
      const cloneReq = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      });

      return next.handle(cloneReq).pipe(
        tap(
          (success) => {
            console.log('success token ');
          },
          catchError((error: HttpErrorResponse) => {
            if (error.status == 401 && !this.refreshingAccessToken) {
              return this.refreshAccessToken().pipe(
                switchMap(() => {
                  var request = req.clone({
                    headers: req.headers.set(
                      'Authorization',
                      'Bearer ' + localStorage.getItem('token')
                    ),
                  });

                  return next.handle(request);
                }),
                catchError((err: any) => {
                  console.log(err);
                  this.authService.logout();
                  return empty;
                })
              );
            }
          })
        )
      );
    } else {
      return next.handle(req.clone());
    }
  }

  refreshAccessToken() {
    this.refreshingAccessToken = true;
    return this.authService.getNewAccessToken().pipe(
      tap(() => {
        console.log('refresh token');
        this.refreshingAccessToken = false;
      })
    );
  }
}
