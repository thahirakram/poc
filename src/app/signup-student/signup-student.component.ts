import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrls: ['./signup-student.component.css']
})
export class SignupStudentComponent implements OnInit {
  signupForm = this.fb.group({
    name: ['',Validators.required],
    Email: ['',Validators.required],
    password: ['',Validators.required]  
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
