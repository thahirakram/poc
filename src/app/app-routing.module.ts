import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginStudentComponent } from './login-student/login-student.component';
import { SignupStudentComponent } from './signup-student/signup-student.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginStudentComponent
  }, 
  {
    path: 'signup',
    component: SignupStudentComponent
  }, 
  {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
