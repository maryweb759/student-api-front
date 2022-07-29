import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from './auth/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class HttpBasicAuthIntercepterService implements HttpInterceptor {

  constructor(private auth: AuthentificationService,) { } 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let userName = 'meriem';
    // let password =  'meriem'; 
    // let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);  // convert to base 64

  if(this.auth.getToken() != null && this.auth.getUserName() != null) {
    request = request.clone({
      setHeaders: {
        Authorization: this.auth.getToken().toString()
      }
    })

  }
   return next.handle(request); 

  }
}
