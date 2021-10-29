import { SelectionModel } from '@angular/cdk/collections';
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { DataTableItemModel } from '../../../../core/models/datatable-item.model';
import { QueryParamsModel } from '../../../../core/models/query-params.model';
import { DataTableService } from '../../../../core/services/datatable.service';
import { LayoutConfigService } from '../../../../core/services/layout-config.service';
import { SubheaderService } from '../../../../core/services/layout/subheader.service';
import { DataTableDataSource } from '../../../partials/content/widgets/general/data-table/data-table.data-source';
import { Data, Salary } from './salary.model';
import {MatSort} from '@angular/material';
import {MatPaginator} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

@Component({
	selector: 'm-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	//  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

	constructor(
		private router: Router,
		private configService: LayoutConfigService,
		private subheaderService: SubheaderService,
		private authService :AuthenticationService,
		private datePipe: DatePipe,
	
	) {
		// this.subheaderService.setTitle('Dashboard');
	
	}
    user:Data[]
	userInfo:any
    date:any;
    salaryInfo:any=[{
		id:'',
		empid:'',
		salarydate: '',
		amount: '',
		salarymonth: '' }
	]
	 ngOnInit(): void {
		this.salarydata();
	
	}

     /* UI */

	  lable=[]
	  data=[]
      
     
       salarydata(){
		this.date = this.datePipe.transform(new Date(), 'yyyy/MM/dd');
		let authObs:Observable<Salary[]>;
		let userData: any = window.localStorage.getItem('userData');
		this.userInfo = JSON.parse(userData);
		authObs= this.authService.salaryList(this.userInfo.id)
		authObs.subscribe((data:Data[]) => {
			this.salaryInfo = data
			data.forEach(x => {  
                this.lable.push(x.salarymonth);  
				console.log(this.lable)
				this.data.push(x.amount); 
				console.log(this.data) 
				
			  });  
		})
	}

	


}
