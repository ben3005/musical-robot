import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MissingPersonsService } from './missingpersons.service';
import { MissingPerson } from './missingperson';
import { MapComponent } from './map/map.component';

@Component({
	selector: 'person',
	template: ` 
	<div *ngIf="isPersonSet">
		<h2> {{ person.forename }} {{ person.surname }} </h2>
		<div class="col-xs-6">
			<div class="col-xs-12">
				<img src="./img/person.png" />
			</div>
			<div class="col-xs-12">
				<div class="col-xs-6">
				<label>Age: </label><p>{{ (person.age) ? person.age : 'Unknown' }}</p>
				<label>Status: </label><p>{{ person.status }} </p>
				<label>Category: </label><p>{{ person.category }} </p>
				</div>
				<div class="col-xs-6">
				<label>Missing on: </label><p>{{ person.missingOn }}</p>
				<label>Borough: </label><p>{{ person.borough }} </p>
				</div>
			</div>
		</div>
		<div class="col-xs-6">
			<h4>Location History</h4>
			<sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
				<sebm-google-map-marker *ngFor="let marker of person.history; let i = index" 
					[latitude]="marker.location.latitude" 
					[longitude]="marker.location.longitude"
					[title]="marker.entryOn">
				</sebm-google-map-marker>
			</sebm-google-map>
			<p>Output area: {{ person.outputArea }} </p>
			<p>Latitude: {{ person.latitude }} </p>
			<p>Longitude: {{ person.longitude }} </p>
			<p>Recorded on: {{ person.recordCreatedOn }} </p>
			<p>Last updated on: {{ person.recordUpdatedOn }} </p>
			<p>Last seen on: {{ person.lastSeenOn }} </p>
			<p>Status changed on: {{ person.statusChangedOn }} </p>
			<p>Accomodation type: {{ person.accomodationType }} </p>
			<p>Status prior to dormant: {{ person.statusPriorToDormant }} </p>
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
	// google maps zoom level
	zoom: number = 10;
	// initial center position for the map
	lat: number = 53.472225;
	lng: number = -2.2936244;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private missingPersonsService: MissingPersonsService)
	{ this.isPersonSet = false; }

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			let uid = params['uid'];
			this.missingPersonsService.getMissingPerson(uid).subscribe(
				person => { this.person = person; this.isPersonSet = true; },
				error => this.errorMessage = <any>error);
		});
	}
}