import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent, RegistrationComponent, ForgetPasswordComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
