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
import {DataTableComponent } from 'src/app/data-table/data-table.component';
import {TableModule} from 'primeng/table';
import { PartenaireComponent } from 'src/app/partenaire/partenaire.component';
import { PersonnelComponent } from 'src/app/personnel/personnel.component';
import { PartenaireService } from 'src/app/partenaire/partenaire.service';



@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,
    UserComponent,
    DataTableComponent,
    PartenaireComponent,
    PersonnelComponent
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
    PartenaireService
]
})
export class DefaultModule { }
