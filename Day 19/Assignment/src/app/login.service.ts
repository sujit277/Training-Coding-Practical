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

  warning(msg:string){
    let strWarning = "WARNING:" +new Date+":"+msg;
    console.log(strWarning);
  }

  debug(msg:string){
    let strWarning = "DEUG:" +new Date+":"+msg;
    console.log(strWarning);
  }
}
