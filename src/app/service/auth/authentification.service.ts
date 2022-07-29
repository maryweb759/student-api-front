import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient: HttpClient) { }
  AuthenticateUser(userName: string, password: string): Observable<Auth> {
   // let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password); 
   // let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ":" + password);
    // let header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });

    return this.httpClient.post<Auth>(`http://localhost:8080/signin`, {userName, password}).pipe(
      map(response => {
        sessionStorage.setItem("isLogin", userName);
        sessionStorage.setItem("token", `Bearer ${response.token}`); 
        
        return response;
      }
      )
    )

  }
  // AuthenticateUser(userName: string, password: string): Observable<Auth> {
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password); 
  //  // let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ":" + password);
  //   let header = new HttpHeaders({
  //     Authorization: basicAuthHeaderString
  //   });

  //   return this.httpClient.get<Auth>(`http://localhost:8080/authenticate`, { headers: header }).pipe(
  //     map(response => {
  //       sessionStorage.setItem("isLogin", userName);
  //       sessionStorage.setItem("token", basicAuthHeaderString);
  //       return response;
  //     }
  //     )
  //   )

  // }
  getToken() {
    if(this.getUserName()){

    }
    
       return sessionStorage.getItem("token");

  }

  getUserName() {
    return sessionStorage.getItem("isLogin")
  } 

  logOut() {
    sessionStorage.removeItem("isLogin"); 
    sessionStorage.removeItem("token");
  }
}



export class Auth {
  constructor(private _token: string) {
  }
  get token(): string {
    return this._token;
  }
  set token(value: string) {
    this._token = value;
  }
 

}
