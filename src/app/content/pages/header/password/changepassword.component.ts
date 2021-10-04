import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OldPwdValidators } from "./password-validation";

@Component({
    selector: 'm-changepassword',
      templateUrl: './changepassword.component.html',
      changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class ChangepasswordComponent  {
    form1: FormGroup; 
  
    constructor(fb: FormBuilder){
      this.form1 = fb.group({
        'oldPwd': ['',Validators.required,OldPwdValidators.shouldBe1234],
        'newPwd': ['',Validators.required],
        'confirmPwd': ['',Validators.required]
      }, {
        validator: OldPwdValidators.matchPwds
      });
    }
  
    get oldPwd(){
      return this.form1.get('oldPwd');
    }
  
     get newPwd(){
      return this.form1.get('newPwd');
    }
  
     get confirmPwd(){
      return this.form1.get('confirmPwd');
    }
  }