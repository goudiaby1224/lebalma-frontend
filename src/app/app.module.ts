import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DefaultModule } from './layouts/default/default.module';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PartenaireComponent,
    AdresseComponent,
    PersonnelComponent,
    EntrepriseComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
   DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
