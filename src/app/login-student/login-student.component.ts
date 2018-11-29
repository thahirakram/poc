import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {
        loginForm = this.fb.group({
          Email: ['',Validators.required],
          password: ['',Validators.required],
        });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
