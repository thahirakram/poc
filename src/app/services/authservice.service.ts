import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private next = '';
  subject = new BehaviorSubject(false);

  constructor(private http: HttpClient, private tokenServe: TokenService, private route: ActivatedRoute, private router: Router) {
    this.subject.next(this.isLoggedIn);
    this.route.queryParams.subscribe(params => {
      this.next = params['next'] || '/';
    })
  }

  signUp(data) {
    const url = "http://localhost:3000/api/auth/signup";
    return this.http.post(url, data)
      .subscribe((value: any) => {
        this.signUp = value;

      });
  }

  // login auth starts
  logIn(data) {
    const url = "http://localhost:3000/api/auth/login";
    return this.http.post(url, data)
      .subscribe((value: any) => {
        const token = value.token;
        // this.tokenServe.tokendecoded(token);
        this.tokenServe.token = token;
        this.subject.next(true);
        this.router.navigate([this.next]);
        return;
       
      });
  }

  get isLoggedIn() {
    return !!this.tokenServe.token;
  }

  logout() {
    this.tokenServe.token = '';
    this.subject.next(false);
    this.router.navigate(['/login']);
  }



  forgotPass(data) {
    const url = "http://localhost:3000/api/auth/forgot-password";
    return this.http.post(url, data)
      .subscribe((value: any) => {
        this.forgotPass = value;
      });
  }


  resetPass(data) {
    const url = "http://localhost:3000/api/auth/reset-password";
    return this.http.post(url, data)
      .subscribe((value: any) => {
        this.resetPass = value;
      });
  }
}
