import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor() { }

  userLogin = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

    public validationMessages = {
      'name': [{ type: 'required', message: 'First Name is required' }],
      'email': [{ type: 'required', message: 'Email is required' }]};
  ngOnInit(): void {
  }

  login(){
    alert(this.userLogin.value);
  }
}
