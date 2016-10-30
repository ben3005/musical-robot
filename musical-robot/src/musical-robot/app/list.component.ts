import { Component, OnInit } from '@angular/core';

import { MissingPersonsService } from './missingpersons.service';
import { MissingPerson } from './missingperson';

@Component({
	selector: 'list',
	template: `
	<h3>Missing Persons</h3>
	<div class="card" *ngFor="let person of missingPersons"> 
		<p>{{ person.forename }} {{ person.surname }}</p>
	</div>
	`,
	providers: [MissingPersonsService]
})

export class MissingPersonListComponent implements OnInit {
	errorMessage: string;
	missingPersons: Array<MissingPerson>;
	mode = 'Observable';

	constructor(private missingPersonsService: MissingPersonsService) { }

	ngOnInit() {
		this.getMissingPersons();		
	}

	getMissingPersons() {
		this.missingPersonsService.getMissingPersons()
			.subscribe(
			missingPersons => { this.missingPersons = missingPersons; console.log(missingPersons); },
			error => this.errorMessage = <any>error);
	}
}
