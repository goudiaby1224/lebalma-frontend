import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdresseComponent } from './adresse/adresse.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { MaterialModule } from './material/material.module';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';










@NgModule({
  declarations: [
    AppComponent,
    AdresseComponent,
    EntrepriseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   DefaultModule,
   MaterialModule,
   FormsModule,
   HttpClientModule,
   NgbModule
  ],
  
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
