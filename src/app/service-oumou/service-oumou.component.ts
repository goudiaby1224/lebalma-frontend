import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ServiceOumou } from './ServiceOumou.model';
import { ServiceOumouService } from './ServiceOumou.service';

@Component({
  selector: 'app-service-oumou',
  templateUrl: './service-oumou.component.html',
  styleUrls: ['./service-oumou.component.css']
})
export class ServiceOumouComponent implements OnInit {

  loadedService: ServiceOumou[] = [];
  isFetching = false;
  error :any;
  private errorSub!: Subscription;

  regiForm: FormGroup;  
  nom:string='';  
  responsable:string='';  


  constructor(private fb: FormBuilder,public readonly service: ServiceOumouService) {

    this.regiForm = fb.group({  
      'nom' : [null, Validators.required],  
      'responsable' : [null, Validators.required] 
    
    });  

   }
   
  ngOnInit(): void {
    this.errorSub = this.service.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.service.fetchAllServiceOumou().then(services => {
      this.isFetching = false;
      this.loadedService = services;
    },
    error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

 


onCreateUser(postData: ServiceOumou) {
  // Send Http request
  this.service.createAndStoreServiceOumou(postData.nom, postData.responsable);
}

onFetchUsers() {
  // Send Http request
  this.isFetching = true;
  this.service.fetchAllServiceOumou().then(
    services => {
      this.isFetching = false;
      this.loadedService = services;
    },
    error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    }
  );
}


onRowEditInit(serviceOumou: ServiceOumou) {
  console.log(serviceOumou);
}

onRowEditSave(serviceOumou: ServiceOumou) {
  this.service.updateServiceOumou(serviceOumou);
}

onRowEditCancel(serviceOumou: ServiceOumou, index: number) {
  console.log('Row edit cancelled');
}


onHandleError() {
  this.error = null;
}

}
