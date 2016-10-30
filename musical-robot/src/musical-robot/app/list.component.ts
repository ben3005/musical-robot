import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MissingPersonsService } from './missingpersons.service';
import { MissingPerson } from './missingperson';
import { PersonComponent } from './person.Component';

@Component({
	selector: 'list',
	template: `
	<h3>Missing Persons</h3>
	<div class="card" *ngFor="let person of missingPersons" (click)="onselect(person)"> 
		<p>{{ person.forename }} {{ person.surname }}</p>
	</div>
	`,
	providers: [MissingPersonsService]
})

export class MissingPersonListComponent implements OnInit {
	errorMessage: string;
	missingPersons: Array<MissingPerson>;
	mode = 'Observable';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private missingPersonsService: MissingPersonsService) { }

	ngOnInit() {
		this.getMissingPersons();		
	}

	onselect(person: MissingPerson) {
		this.router.navigate(['/person', person.uid]);
	}

	getMissingPersons() {
		this.missingPersonsService.getMissingPersons()
			.subscribe(
			missingPersons => { this.missingPersons = missingPersons; },
			error => this.errorMessage = <any>error);
	}
}
