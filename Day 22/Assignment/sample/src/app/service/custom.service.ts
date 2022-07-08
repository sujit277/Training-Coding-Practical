import { Injectable } from '@angular/core';
import { AbstractControl,FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor() { }

  emailValidator(userControl: AbstractControl) {
    if (this.validateEmail(userControl.value)) {
      return { emailValid: true };
    }
    return { emailValid: false };
  }

  validateEmail(email: string) {
    console.log(email);
    email.endsWith('.com');
    console.log(email.endsWith('.com'));
    return email.endsWith('.com');
  }
}
