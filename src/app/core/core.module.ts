import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home',
    component: CoreComponent
  }
  ];

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class CoreModule { }
