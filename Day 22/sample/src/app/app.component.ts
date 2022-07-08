import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { CustomValidationService } from './service/custom-validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';

 //Logic For Template Driven Forms
  formUserName = "Sujit";
  formPassword = "Admin";
 
  /* login() {
    let str = `Given Email is ${this.formUserName} and Password is ${this.formPassword}`;
    alert(str);
  } */

  Login!:FormGroup;
  constructor(private customValidation:CustomValidationService){}

  ngOnInit(){
    this.Login = new FormGroup({
      username: new FormControl('',[Validators.required,this.customValidation.userNameValidator.bind(this.customValidation),]),
      password: new FormControl('',[Validators.required])  
    })
  }

  // Logic for Reactive Forms
  /* username!:string;
  password!:string; */


  /* login(){
    this.username = this.Login.value.username;
    this.password = this.Login.value.password;
    let str = `Given UserName is ${this.username} and Password is ${this.password}`;
    alert(str);
  } */

  get username(){
    return this.Login.get('username');
  }

  get password(){
    return this.Login.get('password');
  }

  //Jasmine Karma

  add(num1:number,num2:number){
    return num1+num2;
  }
  
  login(uid:String,pwd:string){
    let strReturn = "Invalid User";
    if(uid == "SujitVerma" && pwd =="1230"){
      strReturn = "Valid User"
    }
    return strReturn;

  }
 
}

