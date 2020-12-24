import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Partenaire } from './partenaire.model';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {PartenaireService} from './partenaire.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  loadedPartenaire: Partenaire[] = [];
  isFetching = false;
  error :any;
  private errorSub: Subscription | undefined;
  regiForm: FormGroup;

  constructor(private http: HttpClient, private partenaireService: PartenaireService, private fb:FormBuilder) { 
    this.regiForm = fb.group({  
      'raisonsocial' : [null, Validators.required],  
      'adresse' : [null, Validators.required],  
      'telephone' : [null, Validators.required], 
      'responsable' : [null, Validators.required],
      'dateMiseEnService':[null, Validators.required],
      'type':[null, Validators.required],  
      'mail':[null, Validators.compose([Validators.required,Validators.email])],  
     // 'IsAccepted':[null]  
    });  

  }

  ngOnInit(): void {
    this.errorSub = this.partenaireService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.partenaireService.fetchAllPartenaire().then(partenaires => {
      this.isFetching = false;
      this.loadedPartenaire = partenaires;
    },
    error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onCreatePartenaire(partenaire: Partenaire): void {
      this.partenaireService.createAndStorePartenaire(partenaire.raisonSocial, partenaire.adresse, partenaire.telephone,partenaire.responsable, partenaire.mail,
        partenaire.dateMiseEnService, partenaire.type);
  }

  onFetchPartenaire(): void {
    // tslint:disable-next-line:label-position
    var id: string = '1';
    this.isFetching = true;
    this.partenaireService.fetchPartenaire(id);
  }

  onRowEditInit(partnaire: Partenaire) {
    console.log('Row edit initialized');
  }

  onRowEditSave(pertenaire: Partenaire) {
    console.log('Row edit saved');
    this.partenaireService.updatePartenaire(pertenaire);
  }

  onRowEditCancel(partenaire: Partenaire, index: number) {
    console.log('Row edit cancelled');
  }

}
