import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'm-changepassword',
      templateUrl: './changepassword.component.html',
      changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class ChangepasswordComponent  {
    form1: FormGroup; 
  
    constructor(fb: FormBuilder){
      this.form1 = fb.group({
        'oldPwd': ['',Validators.required],
        'newPwd': ['',Validators.required],
        'confirmPwd': ['',Validators.required]
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