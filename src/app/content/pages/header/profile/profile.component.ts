import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../core/auth/authentication.service';

@Component({
  selector: 'm-profile',
	templateUrl: './profile.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
   userInfo : any;
   constructor(){
    
  }
  ngOnInit() {
    let userData: any = window.localStorage.getItem('userData');
    this.userInfo = JSON.parse(userData);        
    console.log(this.userInfo.id);
    
  }
 
  // onLogOut(){
  //   this.authService.logout();

  // }
  // onEmployee(){
  //  this.router.navigate(['/employee']);
  // }
}
