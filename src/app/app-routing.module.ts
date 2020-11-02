import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path: '',
  loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
},
{
  path: 'home',
  loadChildren:()=>import('./core/core.module').then(m=>m.CoreModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
