import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
          forgotform = this.fb.group({
            email: ['',Validators.required]
          })
  constructor(private fb: FormBuilder,private authService: AuthserviceService) { }

  ngOnInit() {
  }
  forgot() {
    const email = this.forgotform.value.email;
    this.authService.forgotPass({email});
  }
}
