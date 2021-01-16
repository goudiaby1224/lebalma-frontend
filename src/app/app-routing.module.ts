import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { PwChangeComponent } from './pw-change/pw-change.component';
import { ServiceOumouComponent } from './service-oumou/service-oumou.component';
import { UserComponent } from './user/user.component';

const defaulRroutes: Routes = [
{path:'home', component: HomeComponent },
{path:'dashboard', component: DashbordComponent },
{path:'service',component: ServiceOumouComponent},
{path:'users', component: UserComponent},
{path:'partenaire', component: PartenaireComponent},
{path:'personnel', component: PersonnelComponent},
{path:'employePartenaire', component: EmployeComponent},
{path: 'login', component: LoginUserComponent},
{path:'pwchange', component: PwChangeComponent},
{path:'**', component: PageNotFoundComponent}

];
const routes: Routes= [
{path:'',
redirectTo : 'default-layout/home',
pathMatch:'full'},
{
  path:'default-layout',
  component:DefaultComponent,
  children:defaulRroutes

},
{
  path:'**',
  component:DefaultComponent,
  children:defaulRroutes
}

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
