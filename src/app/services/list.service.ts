import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private Srv: HttpClient) { }

  getList() {
    return this.Srv.get("http://localhost:3000/api/users");
  }

}
