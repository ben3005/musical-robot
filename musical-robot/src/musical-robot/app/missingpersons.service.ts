import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { MissingPerson } from './missingperson';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MissingPersonsService {
	private missinPersonsUrl = 'api/missingpersons';

	constructor(private http: Http) { }

	getMissingPersons(): Observable<MissingPerson[]> {
		return this.http.get(this.missinPersonsUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	private handleError(error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}