import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  text:number[] = [1,2,3,4,5];
  constructor() { }

  ngOnInit() {
  }

  log(param) {
    console.log(param)
  }

}
