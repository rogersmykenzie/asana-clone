import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  text:number[] = [1,2,3,4,5];
  ableToLogin:boolean = false;
  console:Console = console;
  emailAddress:string;
  password:string;

  constructor() { }

  ngOnInit() {

  }

  setAbleToLogin(bool) {
    this.ableToLogin = bool;
  }

  updateEmailAddress(e) {
    this.emailAddress = e.target.value;
    if(e.target.value !== "") {
      this.setAbleToLogin(true);
    } else if(e.target.value === "") {
      this.setAbleToLogin(false);
    }
  } 
  
  updatePassword(e) {
    this.password = e.target.value;
    this.console.log(this.password);
  }
  
}
