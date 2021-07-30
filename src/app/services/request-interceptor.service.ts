import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// Services Import
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class RequestInterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.userService.isAuthenticated()) {
      return this.getUserToken().pipe(
        mergeMap((token) => {
          if (token) {
            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`
              }
            });
          }
          return next.handle(req);
        }));
    }
    return next.handle(req);
  }

  getUserToken(): Observable<string> {
    const tokenPromise: Promise<string> = this.userService.refreshToken();
    console.log(tokenPromise);
    const tokenObservable: Observable<string> = from(tokenPromise);
    return tokenObservable;
  }
}
