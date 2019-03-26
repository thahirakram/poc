import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {


  isLoggedIn = false;
  constructor(private authServ: AuthserviceService) {

    this.authServ.subject.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authServ.logout();
    Swal.fire({
      type: 'success',
      title: 'Logout',
      text: 'success fully logged out'
    });
  }
}
