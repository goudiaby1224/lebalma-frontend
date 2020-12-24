import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Personnel} from './personnel.model';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonnelService } from './personnel.service';

import { ServiceOumou } from '../service-oumou/ServiceOumou.model';
import { ServiceOumouService } from '../service-oumou/ServiceOumou.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  
  loadedPersonnel: Personnel[] = [];
  loadedServiceOumou: ServiceOumou[] = [];
  isFetching = false;
  error :any;
  private errorSub!: Subscription;
  selectedItem!: ServiceOumou;

  regiForm: FormGroup;  

  BASE_URI = 'http://ec2-18-223-106-114.us-east-2.compute.amazonaws.com:8881/lebalma/utilisateurs/';
  

  constructor(private http: HttpClient,private fb: FormBuilder,
     private service: PersonnelService,private serviceOumouService: ServiceOumouService) {
  
    this.regiForm = fb.group({  
      'nom' : [null, Validators.required],  
      'prenom' : [null, Validators.required],  
      'metier' : [null, Validators.required],  
      'service':[null, Validators.required],
      'nomUtilisateur':[null, Validators.required],
      'tel':[null, Validators.required],  
      'mail':[null, Validators.compose([Validators.required,Validators.email])],  
      'role':[null, Validators.required],
      'adresse':[null, Validators.required],
      'serviceOumou':[null, Validators.required]
     
    });  
  }

  ngOnInit(): void {
    this.errorSub = this.service.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.service.fetchAllPersonnel().then(personnels => {
      this.isFetching = false;
      this.loadedPersonnel = personnels;
    },
    error => {
      this.isFetching = false;
      this.error = error.message;
    });
    this.serviceOumouService.fetchAllServiceOumou().then(serviceOumous=>
      {this.loadedServiceOumou=serviceOumous}
     )
  }

  onCreatePersonnel(postData: Personnel) {
    // Send Http request
    this.service.createPersonnel(postData.nom, postData.prenom, postData.adresse,
      postData.metier, postData.service, postData.nomUtilisateur,
      postData.mail, postData.tel,postData.role,this.selectedItem)
  }

  
  // tslint:disable-next-line:typedef
  createPersonnel(nom: string, prenom: string, adresse: string, metier: string, service: string, nomUtilisateur: string, mail: string, tel: string, role: string) {
    const postData: Personnel = {nom, prenom, adresse, metier, service, nomUtilisateur, mail, tel, role};
    this.http.post(
      this.BASE_URI, postData,
      {
        observe: 'response'
      }
    )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  // tslint:disable-next-line:typedef
  fetchPersonnel(id: string) {
    this.http.get<{ [key: string]: Personnel }>(this.BASE_URI + '/' + id)
      .pipe(
        map(responseDataResponse => {
          console.log(responseDataResponse);
          const postArray: Personnel[] = [];
          for (const key in responseDataResponse) {
            if (responseDataResponse.hasOwnProperty(key)) {
              // postArray.push(responseDataResponse[key], id: key );
            }
          }
          return postArray;
        })
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPersonnel() {
    // Send Http request
    this.isFetching = true;
    this.service.fetchAllPersonnel().then(
      personnels => {
        this.isFetching = false;
        this.loadedPersonnel = personnels;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      }
    );
  }
  
  // tslint:disable-next-line:typedef
  deletePersonnel(id: string) {
    return this.http.delete(this.BASE_URI + '/' + id, {
      observe: 'events',
      responseType: 'text'
    }).pipe(
      tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            //
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        }
      ));
  }
  onRowEditInit(personnel: Personnel) {
    console.log(personnel);
  }
  
  onRowEditSave(personnel: Personnel) {
    this.service.updatePersonnel(personnel);
  }
  
  onRowEditCancel(personnel: Personnel, index: number) {
    console.log('Row edit cancelled');
  }
  
  
  onHandleError() {
    this.error = null;
  }
  
}
