import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SpaceValidator } from 'src/app/model/space-validator';
import { AuthentificationService } from 'src/app/service/auth/authentification.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;
  validationResult = '';
  constructor(private formBuilder:FormBuilder, private loginService:LoginService,
    private route:Router,
  private auth: AuthentificationService) { }
 
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // admin is a group we can add as many groupe as we want
      admin: this.formBuilder.group({
          userName: ["", [Validators.required, Validators.minLength(6),  SpaceValidator.elimaneSpace]] ,
          password:  new FormControl('', [Validators.required, Validators.minLength(6)]) ,
      })
    }) 
  }

  get username() {
    return this.loginForm.get('admin.userName');
  }

  get password() {
    return this.loginForm.get('admin.password');
  }
  onSubmit() {
    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
  // const result =  this.loginService.login(this.loginForm.get("admin")?.value.userName, this.loginForm.get("admin")?.value.password);
//   if(result == true) {
//     this.route.navigateByUrl("/students")
// } else {
// this.validationResult ="invalid userName and password";
// this.timeOutMessage();
// }
 
  const result =  this.auth.AuthenticateUser(this.loginForm.get("admin")?.value.userName, this.loginForm.get("admin")?.value.password)
  .subscribe(
    res => { 
      console.log(res.token);
      this.route.navigateByUrl("/students")

    },
    error => {
      this.validationResult ="invalid userName and password";
      this.timeOutMessage();
    }
    
  );

    
  }
  } 

  timeOutMessage() {
    setTimeout(() => {
      this.validationResult = '';
    }, 3000);
  }
}
