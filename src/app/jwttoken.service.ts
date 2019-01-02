import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwttokenService {

  constructor() { }

  save(token) {
    localStorage.setItem('token', token)
  }

  getToken() {
    localStorage.getItem('token')
  }
}
