import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

import { RouterModule } from '@angular/router';
import { DashbordComponent } from 'src/app/pages/dashbord/dashbord.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from 'src/app/user/user.component';
import {MaterialModule } from  'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import {TableModule} from 'primeng/table';
import { PartenaireComponent } from 'src/app/partenaire/partenaire.component';
import { PersonnelComponent } from 'src/app/personnel/personnel.component';
import { PartenaireService } from 'src/app/partenaire/partenaire.service';
import {ServiceOumouComponent} from 'src/app/service-oumou/service-oumou.component';
import { ServiceOumouService} from 'src/app/service-oumou/ServiceOumou.service';
import {EmployeComponent} from 'src/app/employe/employe.component';
import {EmployePartenaireService} from 'src/app/employe/EmployePartenaire.service';
import {LoginUserComponent} from 'src/app/login-user/login-user.component';
import { PwChangeComponent } from 'src/app/pw-change/pw-change.component';
import { HomeComponent } from 'src/app/home/home.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,
    UserComponent,
    PartenaireComponent,
    PersonnelComponent,
    ServiceOumouComponent,
    EmployeComponent,
    LoginUserComponent,
    PwChangeComponent,
    HomeComponent,
    PageNotFoundComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [
    UserService,
    PartenaireService,
    ServiceOumouService,
    EmployePartenaireService
]
})
export class DefaultModule { }
