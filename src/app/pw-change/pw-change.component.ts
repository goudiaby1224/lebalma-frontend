import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user/user.model';
import { PWChangeValidators } from './PWChangeValidators';

@Component({
  selector: 'app-pw-change',
  templateUrl: './pw-change.component.html',
  styleUrls: ['./pw-change.component.css']
})
export class PwChangeComponent implements OnInit {

  pwChangeForm!: FormGroup;

  // Properties that store paths to FormControls makes our template less verbose
  currentPW!: AbstractControl;
  newPW!: AbstractControl;
  confirmPW!: AbstractControl;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
      this.pwChangeForm = this.fb.group({
          current: ['', Validators.required],
          newPW: ['', Validators.required],
          confirm: ['', Validators.required]}, 
          {
          // Here we create validators to be used for the group as a whole
          validator: Validators.compose([ PWChangeValidators.newIsNotOld(this.pwChangeForm),
                                        PWChangeValidators.newMatchesConfirm(this.pwChangeForm)])}
                                      
      );
      this.currentPW = this.pwChangeForm.controls['currentPW'];
      this.newPW = this.pwChangeForm.controls['newPW'];
      this.confirmPW = this.pwChangeForm.controls['confirmPW'];
  }



  onresetPwd(user: User)
  {
    
  }
}
