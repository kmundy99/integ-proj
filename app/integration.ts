
export class Integration {
	id: number;
	name: string;
	limitTo: number;
	steps: [
		{id: number;
		 name: string;
		 number: number;
		 data: [
				{name: string;
				 readWrite: string;
				 type: string;
				 inputs: [{sourceFieldId: number; overrideLabel: string;}];
				 lookup: string;
				 restApi: string;
				 excel: string;
				 outputs: string}];
}];
}