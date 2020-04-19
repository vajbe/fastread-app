import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const duplicate = req.clone({
      setParams: {
        'apiKey': environment.apiKey,
        'country': environment.country
      }
    });
    return next.handle(duplicate);
  }
}
