import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loadedUsers: User[] = [];
  isFetching = false;
  error :any;
  private errorSub!: Subscription;

  regiForm: FormGroup;  
  login:string='';  
  password:string='';  
  succes:boolean=false;
  
  
  constructor(private fb: FormBuilder,public readonly service: UserService,
     private route: Router,private actRoute: ActivatedRoute) {

    this.regiForm = fb.group({  
      'login' : [null, Validators.required],  
      'password' : [null, Validators.required]
    });  
   
   }
   
  ngOnInit(): void {
   this.succes=false;
  }

 


  onConnectUser(postData: User) {
   this.service.fetchUserByLogin(postData.login).then(resp=>{
    if(resp.password===postData.password){
      this.succes=true;
    }
    console.log(this.succes);
  })
}
resetPassword(username:String) {
  console.log(username);
 this.route.navigate(['login/pwchange'], { queryParams: { user: username } });
}

}
