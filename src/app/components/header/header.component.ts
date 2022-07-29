import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/auth/authentification.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService,
    private auth: AuthentificationService, private route:Router) { }

  ngOnInit(): void {
  }
 isAuthenticaterUser(){
   return this.auth.getUserName();
  //return this.loginService.isLogin();
 } 

 logOut() {
   this.auth.logOut();
   this.route.navigateByUrl("register");
 } 

 search(name: String) {
  //alert(name);
 //this.route.navigate([`students/${name}`]);
 this.route.navigateByUrl(`students/${name}`);
 }
}
