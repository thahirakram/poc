import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'x-token';
  constructor() { }

  get token() {
    return localStorage.getItem(this.tokenKey);
  }

  tokendecoded(token) {
    console.log(token)
    const payload = token.split('.')[1];
    const decoded = JSON.parse(window.atob(payload));
    return decoded;
  }

  set token(token) {
    localStorage.setItem(this.tokenKey, token);
  }
}
