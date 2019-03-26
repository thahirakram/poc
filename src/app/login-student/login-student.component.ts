import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {
        loginForm = this.fb.group({
          email: ['thahirakram289@gmail.com',Validators.required],
          password: ['thahir98',Validators.required],
        });
  constructor(private fb: FormBuilder,
    private authService: AuthserviceService) { }

  ngOnInit() {
  }


  logIn() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.logIn({email, password});
    // Swal.fire({
    //   position: 'top-end',
    //   type: 'success',
    //   title: 'Login success',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
  }



}
