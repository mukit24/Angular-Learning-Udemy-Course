import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('request is one the way');
    console.log(request.url);
    let modifiedRequest = request.clone({
        headers: request.headers.append('Auth', 'xyz')
    })
    return next.handle(modifiedRequest);
  }
}