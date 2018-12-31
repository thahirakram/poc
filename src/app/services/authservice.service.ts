import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }

  signUp(data) {
    const url = "http://localhost:3000/api/auth/signup";
    return this.http.post(url, data)
      .subscribe((value: any) => {
        this.signUp = value;

      });
      

  }
  

  logIn(data) {
    const url = "http://localhost:3000/api/auth/login";
    return this.http.post(url, data)
      .subscribe((value: any) => {
        this.logIn = value;
      });
  }

  forgotPass(data) {
    const url = "http://localhost:3000/api/auth/forgot-password";
    return this.http.post(url, data)
      .subscribe((value: any) => {
        this.forgotPass = value;
      });
  }
}
