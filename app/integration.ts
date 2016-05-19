
export class Integration {
	id: number;
	name: string;
	limitTo: number;
	steps: [
		{id: number,
		 number: number,
		 name: string,
		 data: [
				{name: string;
				 inputs: string;
				 readWrite: string;
				 type: string;
				 lookup: string;
				 restApi: string;
				 excel: string;
				 outputs: string}];
}