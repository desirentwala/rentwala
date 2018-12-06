import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  login=true;
  register=false;

  checkpage(){
    this.login = false;
    this.register =true;

  }
  checkpagelogin(){
    this.login = true;
    this.register =false;  
  }

}

