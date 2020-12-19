import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group(
      {
        usager: ['', Validators.required], nom: ['', Validators.required], password: ['', Validators.required],
          numero: [0], option: ['', Validators.required]
      }

  );

   }
   
  ngOnInit(): void {
  }

  roles: any[] = [
    { name: 'SOUS-ADMIN' },
    { name: 'AGENT' },
    { name: 'ADMIN' },
    
];

  
}
