import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';
@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrls: ['./signup-student.component.css']
})
export class SignupStudentComponent implements OnInit {
  signupForm = this.fb.group({
    name: ['', Validators.required],
    Email: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder,
    private authService: AuthserviceService) { }

  ngOnInit() {
  }

  signUp() {
    const name = this.signupForm.value.name;
    const email = this.signupForm.value.Email;
    const password = this.signupForm.value.password;
    var a = { name, email, password };
    this.authService.signUp(a);
  }
}
