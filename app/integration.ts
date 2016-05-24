
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
				 inputs: [{sourceStepId: number; sourceFieldId: number; overrideLabel: string;}];
				 lookup: string;
				 restApi: {name: string; url: string; username: string; password: string;};
				 excel: {name: string; ipAddress: string; username: string; password: string; dirPath: string; moveToPath: string; fileName: string;};
				 outputs: [{fieldId: number; fieldLabel: string;}]
				 }];
}];
}