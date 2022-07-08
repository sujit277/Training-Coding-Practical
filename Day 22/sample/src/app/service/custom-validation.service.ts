import { Injectable } from '@angular/core';
import { AbstractControl,FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }

  userNameValidator(userControl: AbstractControl) {
    if (this.validateUserName(userControl.value)) {
      return { userNameNotAvailable: false };
    }
    return { userNameNotAvailable: true };
  }

  validateUserName(username: string) {
    console.log(username);
    const UserList = ['SujitVerma','Ashish'];
    console.log(UserList.indexOf(username)>-1);
    return UserList.indexOf(username) > -1;
  }
}
