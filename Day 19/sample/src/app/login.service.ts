import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  log(msg:string){
    let strLogMsg = "INFO: "+ new Date()+":"+msg;
    console.log(strLogMsg);
  }
}
