import { I } from '@angular/cdk/keycodes';
import { DatePipe } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, HostBinding, DoCheck, AfterContentInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { User } from '../userdata.model';


@Component({
  selector: 'm-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProfileComponent implements OnInit {
  date:any;
  userInfo: any;
  profile: any;
  isShown: boolean;
 designation:any
  constructor(	private _zone:NgZone, private authservice: AuthenticationService,private datePipe: DatePipe) {
  }

 ngOnInit() {
  this.authservice.getDesignation().subscribe
  (
    (response)=>
    {
      this.designation = response;
      console.log(response)
    },
    (error) => console.log(error)
  )
    this.isShown = true;
  
   
    let userData: any = window.localStorage.getItem('userData');
    this.userInfo = JSON.parse(userData);
    this.profile = JSON.parse(userData);
    console.log(this.userInfo)
  }
  ngAfterViewChecked(): void {
    this._zone.runOutsideAngular(() => {
      this.date = this.datePipe.transform(new Date(), 'yyyy/MM/dd');
    })
  }
  onupdatedata(): void {
    this.profile = this.userInfo
    console.log(this.userInfo)
    this.authservice.updateData(this.userInfo)
      .subscribe(
        response => {
          console.log(response);
          localStorage.setItem('userData',JSON.stringify(this.userInfo));
  },
        error => {
          console.log(error);
        });
      
  }

  register() {
    this.isShown = false;
  }
  toggleShow() {
   this.isShown = true;

  }
  oncancle() {
    console.log(this.userInfo)
    let userData: any = window.localStorage.getItem('userData');
    this.userInfo = JSON.parse(userData);
  }

}


