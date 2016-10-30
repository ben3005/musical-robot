import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MissingPersonsService } from './missingpersons.service';
import { MissingPerson } from './missingperson';
import { MapComponent } from './map/map.component';

@Component({
	selector: 'person',
	template: ` 
	<div class="col-md-5" *ngIf="isPersonSet">
		<h2> {{ person.forename }} {{ person.surname }} </h2>
		<div>
			<p>Age: {{ person.age }} </p>
			<p>Status: {{ person.status }} </p>
			<p>Status prior to dormant: {{ person.statusPriorToDormant }} </p>
			<p>Category: {{ person.category }} </p>
			<p>Accomodation type: {{ person.accomodationType }} </p>
			<p>Borough: {{ person.borough }} </p>
			<p>Missing on: {{ person.missingOn }} </p>
			<p>Recorded on: {{ person.recordCreatedOn }} </p>
			<p>Last updated on: {{ person.recordUpdatedOn }} </p>
			<p>Last seen on: {{ person.lastSeenOn }} </p>
			<p>Status changed on: {{ person.statusChangedOn }} </p>
			<div class="pull-right">
				<i>Location History</i>
				<p>Output area: {{ person.outputArea }} </p>
				<p>Latitude: {{ person.latitude }} </p>
				<p>Longitude: {{ person.longitude }} </p>
				<p>OutputAreaCenX: {{ person.outputAreaCenX }} </p>
				<p>OutputAreaCenY: {{ person.outputAreaCenY }} </p>
				<div>Prior location points: 
					<div *ngFor="let point of person.history"> 
						<p>Message: {{point.message}} </p>
						<p>Entry on: {{point.entryOn}} </p>
						<p>Coordinates: ({{ point.location.latitude }}, {{point.location.longitude}}) </p>
					</div>
				</div>
			</div>
		</div>
	</div>
	`,
	providers: [MissingPersonsService]
})
export class PersonComponent implements OnInit {
	uid: string;
	errorMessage: string;
	person: MissingPerson;
	isPersonSet: boolean;
	mode = 'Observable';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private missingPersonsService: MissingPersonsService)
	{ this.isPersonSet = false; }

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			let uid = params['uid'];
			this.missingPersonsService.getMissingPerson(uid).subscribe(
				person => { this.person = person; this.isPersonSet = true; console.log(person); },
				error => this.errorMessage = <any>error);
		});
	}
}