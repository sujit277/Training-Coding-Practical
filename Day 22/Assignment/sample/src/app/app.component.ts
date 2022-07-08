import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomService } from "./service/custom.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';


  formName!: string;
  formEmail!: string;
  formMobileNo!: string;
  formPassword!: string;
  condition: boolean = false;

  /* Login Button Functionality of Template Driven Form Showing Data */
  /* login() {
    this.condition = true;
  }  */

  /* Login Button Functionality for Template Driven For for Accessing Data 
  Using Form Reference Variable*/
  login(value: any) {
    console.log(value);
  }


  Login!: FormGroup;
  constructor(private customValidation: CustomService) { }

  ngOnInit() {
    this.Login = new FormGroup({
      username: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, this.customValidation.emailValidator.bind(this.customValidation)]),
      password: new FormControl('', [Validators.required])
    })
  }

  /* Login Button Functionality of Template Driven Form for Alert*/
  /* login(){
    alert(`Name:${this.formName} Email:${this.formEmail} Mobile No ${this.formMobileNo} Password ${this.formPassword}`)
  } */

  value1!: string;
  value2!: string;
  value3!: string;
  str!: string;

  submit() {
    this.value1 = this.Login.value.username;
    this.value2 = this.Login.value.email;
    this.value3 = this.Login.value.password;
    this.str = `Given UserName ${this.value1} Email ${this.value2} and  Password ${this.value3}`;
    console.log(this.str);
  }

  get username() {
    return this.Login.get('username');
  }
  get email() {
    return this.Login.get('email');
  }
  get password() {
    return this.Login.get('password');
  }
}
