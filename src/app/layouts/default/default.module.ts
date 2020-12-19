import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

import { RouterModule } from '@angular/router';
import { DashbordComponent } from 'src/app/pages/dashbord/dashbord.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from 'src/app/user/user.component';
import {MaterialModule } from  'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class DefaultModule { }
