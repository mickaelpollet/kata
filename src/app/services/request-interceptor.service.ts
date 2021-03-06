import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

// Services Import
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class RequestInterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Request Interceptor...");
    // Checking if user is not authenticated
    if (!this.userService.isAuthenticated()) {                   // If it's not...
      next.handle(req);                                                       // No request interception
    } else {                                                                  // Else...
      let currentRequest = req.clone({                                        // Cloning current request with Bearer implementation
        setHeaders: {
          Authorization: 'bearer ' + this.userService.currentUser.token
        }
      });
      return next.handle(currentRequest);
    }
  }

}
