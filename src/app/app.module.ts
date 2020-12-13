import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
