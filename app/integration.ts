
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

constructor(id: number, name: string, limitTo: number){
	this.id = id,
	this.name=name,
	this.limitTo = limitTo,
	this.steps=[
		{id: 0,
		 name: "",
		 number: 0,
		 data: [
				{name: "",
				 readWrite: "",
				 type: "",
				 inputs: [{sourceStepId: 0, sourceFieldId: 0, overrideLabel: ""}],
				 lookup: "",
				 restApi: {name: "", url: "", username: "", password: ""},
				 excel: {name: "", ipAddress: "", username: "", password: "", dirPath: "", moveToPath: "", fileName: ""},
				 outputs: [{fieldId: 0, fieldLabel: ""}]
				 }]
}
]}
}