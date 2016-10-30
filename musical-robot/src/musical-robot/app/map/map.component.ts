import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MissingPerson } from '../missingperson';
import { MissingPersonsService } from '../missingpersons.service';

@Component({
	selector: 'map',
	template: `
		<sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom"> 
			<sebm-google-map-marker *ngFor="let marker of markers; let i = index"
				[latitude] = "marker.latitude"
				[longitude] = "marker.longitude"
				[visible] = true
				(markerClick)="markerClick(marker.uid)">
				
			</sebm-google-map-marker>
		</sebm-google-map>
	`,
	providers: [MissingPersonsService]
})

export class MapComponent {
	name = "Map Component";
	markers: Array<MissingPerson>;
	// google maps zoom level
	zoom: number = 10;
	// initial center position for the map
	lat: number = 53.472225;
	lng: number = -2.2936244;

	errorMessage: string;
	missingPersons: Array<MissingPerson>;
	mode = 'Observable';

	constructor(
		private router: Router,
		private missingPersonsService: MissingPersonsService) { }

	ngOnInit() {
		this.getMissingPersons();
	}

	getMissingPersons() {
		this.missingPersonsService.getMissingPersons()
			.subscribe(
			missingPersons => { this.markers = missingPersons; },
			error => this.errorMessage = <any>error);
	}

	markerClick(uid) {
		this.router.navigate(['/person', uid]);
	}
}