import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren:()=>import('./../core/core.module').then(m=>m.CoreModule)
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
  ];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class LoginModule { }
