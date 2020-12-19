import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';



import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : '', component: DefaultComponent,
children:[{path:'', component: DashbordComponent },
{path:'users', component:UserComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
