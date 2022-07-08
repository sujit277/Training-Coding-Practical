import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = "http://localhost:5000";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  /* Making a Post Request */ 
  createEmployee(data: any) {
    console.log(data);
    let url = `${this.baseUrl}/insertEmployee`;
    return this.http.post(url, data,{responseType:'text'});
  } 

  /* Making a Get Request */
  getEmployee() {
    return this.http.get(`${this.baseUrl}/getAllEmployees`);
  }

  /* Making a Put Request */
  updateEmployee(data:any,emailId:any){
    console.log(emailId);
    console.log(data);
    let url = `${this.baseUrl}/updateEmployee/${emailId}`;
    return this.http.put(url,data,{responseType:'text'})
  }

  /* Making a Delete Request */
  deleteEmployee(emailId: any) {
    console.log(emailId);
    let url = `${this.baseUrl}/deleteEmployee/${emailId}`;
    return this.http.delete(url,{responseType:'text'})
  }
}
