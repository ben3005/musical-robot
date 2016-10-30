import { Coords } from './coords';

export class History {
	constructor(
		public message: string,
		public entryOn: string,
		public location: Coords) { }
}