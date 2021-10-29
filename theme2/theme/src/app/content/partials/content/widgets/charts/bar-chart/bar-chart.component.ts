import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../../../core/auth/authentication.service';
import { Data } from '../../../../../pages/components/dashboard/salary.model';

@Component({
	selector: 'm-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
	chartReady = true
	salarydata:Data[];
	salarymonth=[]
    amount=[]
	userInfo:any
	salaryInfo: any = {
	   id:'',
	   empid:'',
	   salarydate: '',
	   amount: '',
	   salarymonth: '' };
	url="http://localhost:3000/emp-salary-dashboard";
  
	public barChartOptions: any = {
	
		scaleShowVerticalLines: true,
		responsive: true,
		scales: {
			yAxes: [
			  {
				scaleLabel: {
					display: true,
					labelString: 'Amount (INR)'
				  },
				ticks: {
				  beginAtZero: true
				}
			  }
			],
			xAxes: [ {
				scaleLabel: {
				  display: true,
				  labelString: 'Months'
				}
			}]
		  }
	};
	@Input() public barChartLabels=this.salarymonth
	public barChartType: string = 'bar';
	public barChartLegend: boolean = true;

	@Input() public barChartData = [
		 {data: this.amount, label: 'Series A'}
	];

	constructor (	private authService :AuthenticationService) { 
		
	}

	ngOnInit () {
	
		this.salary()
	}
	salary(){
		this.chartReady = true
		let userData: any = window.localStorage.getItem('userData');
		this.userInfo = JSON.parse(userData);
		this.authService.salaryList(this.userInfo.id).subscribe((result:Data[]) => {  
			this.salaryInfo=result
		  result.forEach(x => {  
			this.salarymonth.push(x.salarymonth);  
			this.amount.push(x.amount);  
		  });  
	})
	}
	

	// events
	chartClicked (e: any): void {
	}

	chartHovered (e: any): void {
	}


}
