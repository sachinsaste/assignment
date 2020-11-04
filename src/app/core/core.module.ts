import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const appRoutes: Routes = [
  // {
  //   path: '',
  //   loadChildren:()=>import('./../login/login.module').then(m=>m.LoginModule)
  // },
  {
    path: 'home',
    component: CoreComponent
  }
  ];

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class CoreModule { }
