import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });


    return next.handle(request).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            


            localStorage.setItem("token", "");
            localStorage.setItem("auth", "0");
            localStorage.setItem("type", ``)
            this.router.navigateByUrl(`/signin`, { replaceUrl: true });



          }
        }
      });
  }
}