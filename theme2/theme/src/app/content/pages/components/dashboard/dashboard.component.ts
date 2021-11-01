import { SelectionModel } from '@angular/cdk/collections';
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgZone, OnInit, ViewChild } from '@angular/core';
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
	//   changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardComponent implements OnInit {

	public lable =[]
    public datachart = []
	sortOrder: string = 'asc';
	sortColumn: string = 'salarydate';
	constructor(
		private router: Router,
		private configService: LayoutConfigService,
		private subheaderService: SubheaderService,
		private authService :AuthenticationService,
		private datePipe: DatePipe,
		private _zone:NgZone
	
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
				 this.datachart.push(x.amount); 
				// console.log(this.datachart) 
				
			  });  
		})
	console.log(this.lable)
	console.log(this.datachart)	  
	}
	SortData(col: string): void {
		
		if (this.sortColumn == col) {
           if (this.sortOrder == 'asc')
			this.sortOrder = 'desc';
		  else
			this.sortOrder = 'asc';
		}
		else {
		  this.sortColumn = col;
		  this.sortOrder = 'asc';
		}
		this.salaryInfo = this.salaryInfo.sort((a, b) => {
		  if (a[col] < b[col])
		  console.log(a)
			return this.sortOrder == 'asc' ? -1 : 1;
		  if (a[col] > b[col])
			return this.sortOrder == 'asc' ? 1 : -1;
		  return 0;
		})
	  }	

}
