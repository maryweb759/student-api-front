import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './auth/authentification.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginActivateService implements CanActivate{

  constructor(
    private loginService: LoginService, 
    private auth: AuthentificationService,
    private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.auth.getUserName()) {
      this.route.navigateByUrl("/students")
      return false
    } else {
      return true;
    }
  }
}
