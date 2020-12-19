import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    PartenaireComponent,
    AdresseComponent,
    PersonnelComponent,
    EntrepriseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   DefaultModule,
   MaterialModule,
   FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
