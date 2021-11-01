import { Component, Input, OnInit, NgZone, ChangeDetectionStrategy, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { AuthenticationService } from '../../../../../../core/auth/authentication.service';
import { Data } from '../../../../../pages/components/dashboard/salary.model';
import { ChangeDetectorRef } from '@angular/core';
import { BottomSheetComponent } from '../../../../../pages/components/material/popups-and-modals/bottom-sheet/bottom-sheet.component';
@Component({
	selector: 'm-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default,
})
export class BarChartComponent implements OnChanges {
	legend: boolean = true;
	
	public barChartOptions: any = {
		scaleShowVerticalLines: true,
		responsive: true,
		legend: { position: 'bottom',padding:'right' },
		scales: {
			yAxes: [
			  {
				scaleLabel: {
					display: true,
					labelString: 'Amount (INR)'
				  },
				ticks: {
				  beginAtZero: true,
				}
			  }
			],
			xAxes: [ {
				scaleLabel: {
				  display: true,
				  labelString: 'Months',
				
				}
				
			}]
		  }
		  
	};
  @Input() public barChartLabels:string[] 
  @Input() public barChartData : any[]; 
	
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
	changeDetectorRefs: any;
	
		
   constructor (private authService:AuthenticationService, private _zone:NgZone) { 
	
	}
	new_barChartData:any
	ngOnChanges (change:SimpleChanges) {
		if(this.barChartData && this.barChartLabels) {
			console.log(this.barChartLabels)  //month
			console.log(this.barChartData)  //amount
			this._zone.run(() => {
				setTimeout(()=> {
					//Call change detection
					this.new_barChartData = [{data: this.barChartData, label: 'Salary'}]
				 }, 1000)
		   });
			console.log(this.new_barChartData)
		}
	
	}


	// events
	chartClicked (e: any): void {
		
	}

	chartHovered (e: any): void {
	
	}
	

}
