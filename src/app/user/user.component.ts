import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  loadedUsers: User[] = [];
  isFetching = false;
  error :any;
  private errorSub!: Subscription;

  regiForm: FormGroup;  
  login:string='';  
  password:string='';  
  numero:string='';  
  nom:string=''; 
  role:string='';  
  cols:any[];
 
  

  
  constructor(private fb: FormBuilder,public readonly service: UserService) {

    this.regiForm = fb.group({  
      'login' : [null, Validators.required],  
      'password' : [null, Validators.required],  
      'numero' : [null, Validators.required],  
      'nom':[null, Validators.required],
      'role':[null, Validators.required]
      //'Blog':[null, Validators.required],  
      //'Email':[null, Validators.compose([Validators.required,Validators.email])],  
     // 'IsAccepted':[null]  
    });  
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'login', header: 'login' },
      { field: 'password', header: 'password' },
      { field: 'numero', header: 'numero' },
      { field: 'nom', header: 'nom' },
      { field: 'role', header: 'role' }
    ];
   }
   
  ngOnInit(): void {
    this.errorSub = this.service.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.service.fetchAllUser().then(users => {
      this.isFetching = false;
      this.loadedUsers = users;
    },
    error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

 


onCreateUser(postData: User) {
  // Send Http request
  this.service.createUser(postData.login, postData.password, postData.numero.toString(), postData.nom, postData.role);
}

onFetchUsers() {
  // Send Http request
  this.isFetching = true;
  this.service.fetchAllUser().then(
    users => {
      this.isFetching = false;
      this.loadedUsers = users;
    },
    error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    }
  );
}


onRowEditInit(user: User) {
  console.log(user);
}

onRowEditSave(user: User) {
  this.service.updateUser(user);
}

onRowEditCancel(user: User, index: number) {
  console.log('Row edit cancelled');
}


onHandleError() {
  this.error = null;
}

/*onChange(event:any)  
{  
  if (event.checked == true) {  
    this.IsAccepted = 1;  
  } else {  
    this.IsAccepted = 0;  
  }  
}  
*/
// Executed When Form Is Submitted  
onFormSubmit(form:NgForm)  
{  
  console.log(form);  
}  



}
