import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './auth/authentification.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteService implements CanActivate{

  constructor(
    //private loginService: LoginService,
    private auth: AuthentificationService,
     private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   // if(this.loginService.isLogin()) {
     if(this.auth.getToken()  && this.auth.getUserName()){
      return true;
    } 
    this.route.navigateByUrl("/content")
    return false;
  }
}
