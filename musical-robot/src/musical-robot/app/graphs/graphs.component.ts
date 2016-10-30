import { Component, OnInit } from '@angular/core';

import { MissingPersonsService } from '../missingpersons.service';
import { MissingPerson } from '../missingperson';

@Component({
	selector: 'graphs',
	template: `
		<div *ngIf="!hasSetGraphData">
			<div class="loader loader-dark"></div>
		</div>
			<div class="col-xs-offset-1" *ngIf="hasSetGraphData">
				<div class="col-xs-10">
					<h3>Ages</h3>
					<canvas baseChart
						[datasets] = "radarChartData"
						[labels] = "radarChartLabels"
						[chartType] = "radarChartType"></canvas>
				</div>

				<div class="col-xs-10">
					<h3>Boroughs</h3>
					<canvas baseChart
						[data]="pieChartData"
						[labels]="pieChartLabels"
						[chartType]="pieChartType" ></canvas>
				</div>
				
				<div class="col-xs-10">
					<h3>Categories</h3>
					<canvas baseChart
					  [data]="doughnutChartData"
					  [labels]="doughnutChartLabels"
					  [chartType]="doughnutChartType"></canvas>
				</div>

				<div class="col-xs-10">
					<h3>Status</h3>
					<canvas baseChart
						[data]="polarAreaChartData"
						[labels]="polarAreaChartLabels"
						[legend]="polarAreaLegend"
						[chartType]="polarAreaChartType"></canvas>
				</div>
			</div>
`,
	providers: [MissingPersonsService]
})

export class GraphsComponent implements OnInit {
	errorMessage: string;
	mode = 'Observable';
	private femaleData: any = { data: [0, 0, 0, 0, 0], label: 'Female' };
	private maleData: any = { data: [0, 0, 0, 0, 0], label: 'Male' };
	private unknownData: any = { data: [0, 0, 0, 0, 0], label: 'Unknown' };
	
	// Radar
	public radarChartLabels: string[] = ['11-20', '21-30', '31-40', '41-50', '51-60'];

	public radarChartData: any = [
		this.unknownData,
		this.femaleData,
		this.maleData
	];
	public radarChartType: string = 'radar';
	// Pie
	public pieChartLabels: string[] = [];
	public pieChartData: number[] = [];
	public pieChartType: string = 'pie';
	public hasSetGraphData: boolean = false;

	// PolarArea
	public polarAreaChartLabels: string[] = [];
	public polarAreaChartData: number[] = [];
	public polarAreaLegend: boolean = true;

	public polarAreaChartType: string = 'polarArea';


	// Doughnut
	  public doughnutChartLabels: string[] = [];
	  public doughnutChartData: number[] = [];
	  public doughnutChartType: string = 'doughnut';

	constructor(private missingPersonsService: MissingPersonsService) {

	}

	ngOnInit() {
		this.getMissingPersons();
	}

	getMissingPersons() {
		this.missingPersonsService.getMissingPersons()
			.subscribe(
			missingPersons => {
				this.setDataPoints(missingPersons);
			},
			error => this.errorMessage = <any>error);
	}

	setDataPoints(missingPersons) {
		for (var i = 0; i < missingPersons.length; i++) {
			let currentPerson = missingPersons[i];
			if (currentPerson.age <= 20 && currentPerson.age > 10) {
				this.incrementCorrectPoint(currentPerson.gender, 0);
			} else if (currentPerson.age <= 30) {
				this.incrementCorrectPoint(currentPerson.gender, 1);
			} else if (currentPerson.age <= 40) {
				this.incrementCorrectPoint(currentPerson.gender, 2);
			} else if (currentPerson.age <= 50) {
				this.incrementCorrectPoint(currentPerson.gender, 3);
			} else if (currentPerson.age <= 60) {
				this.incrementCorrectPoint(currentPerson.gender, 4);
			}

			this.calculateBoroughPie(currentPerson);
			this.calculateStatus(currentPerson);
			this.calculateCategories(currentPerson);
		}

		this.radarChartData = [
			this.unknownData,
			this.femaleData,
			this.maleData
		];
		this.hasSetGraphData = true;
	}

	calculateBoroughPie(currentPerson) {
		let hasFound: boolean = false;
		for (var i = 0; i < this.pieChartLabels.length; i++) {
			if (this.pieChartLabels[i] === currentPerson.borough) {
				hasFound = true;
				this.pieChartData[i]++;
				break;
			}
		}

		if (!hasFound) {
			this.pieChartLabels.push(currentPerson.borough);
			this.pieChartData.push(0);
		}
	}

	calculateStatus(currentPerson) {
		let hasFound: boolean = false;
		for (var i = 0; i < this.polarAreaChartLabels.length; i++) {
			if (this.polarAreaChartLabels[i].toString().toLowerCase() === currentPerson.status.toString().toLowerCase()) {
				hasFound = true;
				this.polarAreaChartData[i]++;
				break;
			}
		}

		if (!hasFound) {
			this.polarAreaChartLabels.push(currentPerson.status.toString());
			this.polarAreaChartData.push(0);
		}
	}

	calculateCategories(currentPerson) {
		let hasFound: boolean = false;
		for (var i = 0; i < this.doughnutChartLabels.length; i++) {
			if (this.doughnutChartLabels[i].toString().toLowerCase() === currentPerson.category.toString().toLowerCase()) {
				hasFound = true;
				this.doughnutChartData[i]++;
				break;
			}
		}

		if (!hasFound) {
			this.doughnutChartLabels.push(currentPerson.category.toString());
			this.doughnutChartData.push(0);
		}
	}

	incrementCorrectPoint(gender, index) {
		switch (gender) {
			case 'M':
				this.maleData.data[index]++;
				break;
			case 'F':
				this.femaleData.data[index]++;
				break;
			default:
				this.unknownData.data[index]++;
				break;
		}
	}
}