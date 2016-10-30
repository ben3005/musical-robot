import { History } from './history';

export class MissingPerson {
	constructor(
		public uid: string,
		public surname: string,
		public forename: string,
		public birthYear: number,
		public age: number,
		public status: string,
		public statusPriorToDormant: string,
		public category: string,
		public accomodationType: string,
		public borough: string,
		public outputArea: string,
		public latitude: number,
		public longitude: number,
		public outputAreaCenX: string,
		public outputAreaCenY: string,
		public missingOn: string,
		public recordCreatedOn: string,
		public recordUpdatedOn: string,
		public lastSeenOn: string,
		public statusChangedOn: string,
		public history: History) { }
}