import { Component } from '@angular/core';

@Component({
    selector: 'map',
    template: '<sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom"></sebm-google-map>'
})

export class MapComponent {
    name = "Map Component";
	// google maps zoom level
	zoom: number = 10;
	// initial center position for the map
	lat: number = 53.472225;
	lng: number = -2.2936244;
}