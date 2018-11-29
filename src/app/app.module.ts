import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListComponent } from './list/list.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { SignupStudentComponent } from './signup-student/signup-student.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListComponent,
    LoginStudentComponent,
    SignupStudentComponent,
    HomeNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
