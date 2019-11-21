import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() login = new EventEmitter<String[]>();

  username = "";
  password = "";

  constructor() { }

  loginProc() {
    this.login.emit([this.username, this.password]);
  }

}
