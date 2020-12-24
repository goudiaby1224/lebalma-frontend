import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Partenaire } from '../partenaire/partenaire.model';
import { PartenaireService } from '../partenaire/partenaire.service';
import { EmployePartenaire } from './EmployePartenaire.model';
import { EmployePartenaireService } from './EmployePartenaire.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  loadedEmploye: EmployePartenaire[] = [];
  loadedPartenaire: Partenaire[] = [];
  isFetching = false;
  error :any;
  private errorSub!: Subscription;
  selectedItem!: Partenaire;

  regiForm: FormGroup;  

  BASE_URI = 'http://ec2-18-223-106-114.us-east-2.compute.amazonaws.com:8881/lebalma/employes/';
  

  constructor(private http: HttpClient,private fb: FormBuilder,
     private service: EmployePartenaireService,private partenaireService: PartenaireService) {
  
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
      'partenaire':[null, Validators.required]
     
    });  
  }

  ngOnInit(): void {
    this.errorSub = this.service.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.service.fetchAllEmployePartenaire().then(employes => {
      this.isFetching = false;
      this.loadedEmploye = employes;
    },
    error => {
      this.isFetching = false;
      this.error = error.message;
    });
    this.partenaireService.fetchAllPartenaire().then(partenaires=>
      {this.loadedPartenaire=partenaires}
     )
  }

  onCreateEmployePartenaire(postData: EmployePartenaire) {
    // Send Http request
    this.service.createAndStoreEmployePartenaire(postData.nom, postData.prenom, postData.adresse,
      postData.metier, postData.service, postData.nomUtilisateur,
      postData.mail, postData.tel,postData.role,this.selectedItem)
  }

  
  // tslint:disable-next-line:typedef
  createEmployePartenaire(nom: string, prenom: string, adresse: string, metier: string, service: string, nomUtilisateur: string, mail: string, tel: string, role: string) {
    const postData: EmployePartenaire = {nom, prenom, adresse, metier, service, nomUtilisateur, mail, tel, role};
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
  fetchEmployePartenaire(id: string) {
    this.http.get<{ [key: string]: EmployePartenaire }>(this.BASE_URI + '/' + id)
      .pipe(
        map(responseDataResponse => {
          console.log(responseDataResponse);
          const postArray: EmployePartenaire[] = [];
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
    this.service.fetchAllEmployePartenaire().then(
      employes => {
        this.isFetching = false;
        this.loadedEmploye = employes;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      }
    );
  }
  
  // tslint:disable-next-line:typedef
  deleteEmployePartenaire(id: string) {
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
  onRowEditInit(employe: EmployePartenaire) {
    console.log(employe);
  }
  
  onRowEditSave(employe: EmployePartenaire) {
    this.service.updateEmployePartenaire(employe);
  }
  
  onRowEditCancel(employe: EmployePartenaire, index: number) {
    console.log('Row edit cancelled');
  }
  
  
  onHandleError() {
    this.error = null;
  }
  

}
