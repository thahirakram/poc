import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginStudentComponent } from './login-student/login-student.component';
import { SignupStudentComponent } from './signup-student/signup-student.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './services/auth.guard';
import { SecondguardGuard } from './services/secondguard.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { componentFactoryName } from '@angular/compiler';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  {
    path: '',
    component: LoginStudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupStudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reset-password',
    component: ResetComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
