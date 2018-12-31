import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
    resetForm = this.fb.group({
      otp: ['',Validators.required],
      password: ['',Validators.required]
    })
  constructor(private fb: FormBuilder,private authService: AuthserviceService) { }

  ngOnInit() {
  }

reset() {
  const otp = this.resetForm.value.otp;
  const password = this.resetForm.value.password;
  this.authService.resetPass({otp, password});
}
}
