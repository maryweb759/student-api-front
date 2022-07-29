import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { } 

  login( userName: string, password: string) {
  if(userName == "meriem r" && password == "123456") {
    sessionStorage.setItem("isLogin", userName);
    return true;
  } 
  return false;
  }

  // (code between brackets return boolean) 
  // userName -> return true 
  // null -> false
  isLogin() {
    return !(sessionStorage.getItem("isLogin") == null)
  }
  logOut() {
    sessionStorage.removeItem("isLogin");
  }
}

