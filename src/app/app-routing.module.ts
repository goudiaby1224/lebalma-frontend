import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { ServiceOumouComponent } from './service-oumou/service-oumou.component';
import { ServiceOumou } from './service-oumou/ServiceOumou.model';



import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : '', component: DefaultComponent,
children:[{path:'', component: DashbordComponent },
{path:'service',component: ServiceOumouComponent},
{path:'users', component: UserComponent},
{path:'partenaire', component: PartenaireComponent},
{path:'personnel', component: PersonnelComponent},
{path:'employePartenaire', component: EmployeComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
