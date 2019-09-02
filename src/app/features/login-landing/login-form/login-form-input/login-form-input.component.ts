import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form-input',
  templateUrl: './login-form-input.component.html',
  styleUrls: ['./login-form-input.component.scss']
})
export class LoginFormInputComponent implements OnInit {
  @Input() inputLabel:string;
  @Input() fieldType:string = "text";
  @Output() inputTextChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.fieldType)
  }

  emitEvent(e) {
    this.inputTextChange.emit(e);
  }

}
