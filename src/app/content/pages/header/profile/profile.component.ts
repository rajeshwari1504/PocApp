import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { User } from '../userdata.model';


@Component({
  selector: 'm-profile',
	templateUrl: './profile.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
   userInfo : any;
   constructor(private router:Router,private authservice:AuthenticationService){
    
  }
  Updatedata: User = {
    name: '',
    description: '',
    id: 0,
    joiningdata: 0
  };
  ngOnInit() {
    let userData: any = window.localStorage.getItem('userData');
    this.userInfo = JSON.parse(userData);        
    console.log(this.userInfo.id);
   
  }
  onChangepassword(){
    this.router.navigate(['/Changepassword']);
  }
  onupdatedata():void{
    const data = {
      name: this.Updatedata.name,
      description: this.Updatedata.description,
      joiningdata:this.Updatedata.joiningdata
    };
    this.authservice.updateData(this.Updatedata.id,data)
      .subscribe(
        response => {
          console.log(response);
          },
        error => {
          console.log(error);
        });
  }
    
  }


