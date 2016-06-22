import {Component, OnInit} from '@angular/core';
import { Integration} from './integration';
import { IntegrationService } from './integration.service';
import {NgIf} from '@angular/common';
import {FirebaseService} from './firebase.service';
import {GenericService} from './generic.service';

@Component({
    selector: 'integration',
    templateUrl: 'app/integration.component.html',
	styleUrls:  ['app/integration.component.css'],
	providers: [FirebaseService, GenericService]
})

export class IntegrationComponent implements OnInit {

integrations: [Integration];
selectedIntegration: Integration;
selectedStep: Integration;
readWrite = ['Read', 'Write', 'Both'];
type = ['Lookup', 'Excel', 'Rest Api'];
lookup = ['State abbrev to state', 'Taleo Prefix to Fusion Prefix', 'Taleo Person Type to Fusion Person Type'];
limitTo = [1, 3, 5, 10];
saveData: string;
selectedStepIndex: number;
stepOutputs: [{fieldId: number; fieldLabel: string;}];
url: string;
username: string;
password: string;

	
constructor(private _genericService: GenericService, private _firebaseService: FirebaseService ) {
    this._firebaseService.getIntegration()
		.subscribe(
		integ => this.integrations = integ,
		error => console.log(error)
		);
		
		
  }

	saveAll() {
	this._firebaseService.setIntegration(this.integrations)
		.subscribe(
		data => this.saveData = data,
		error => alert(error),
		() => console.log("Finished")
		);
	}
	
	ngOnInit() {
	}
	
	
	onSelect(integ: Integration) {
	this.selectedIntegration = integ;
	console.log(this.selectedIntegration.steps);
	}
	
	onSelects(step: Integration, i: number) {
	this.selectedStep= step;
	console.log("Index of step is="+i);
	this.selectedStepIndex = i;
	}

	addIntegration() {
		this.integrations.push(new Integration(3, "Update Integration Name", 3));
	}
	
		removeIntegration(i: number) {
		this.integrations.splice(i,1);
	}
	
	addStep(){
		this.selectedIntegration["steps"].push(
				{id: 0, name: "Update Step", number: 0, 
				data: [{name: "Update Name",
						readWrite: "",
						type: "",
						inputs: [{sourceStepId: 0, sourceFieldId: 0, overrideLabel: ""}],
						lookup: "",
						restApi: {name: "", url: "", username: "", password: ""},
						excel: {name: "", ipAddress: "", username: "", password: "", dirPath: "", moveToPath: "", fileName: ""},
						outputs: [{fieldId: 0, fieldLabel: ""}]
						}]
				});	
	}
	
	removeStep(i:number) {
	this.selectedIntegration["steps"].splice(i, 1);
	}
	addInput() {
	this.selectedIntegration.steps[this.selectedStepIndex].data[0].inputs.push( 
	{sourceStepId: 0, sourceFieldId: 0, overrideLabel: ""}
	);
	}
	
	removeInput(i:number) {
		this.selectedIntegration.steps[this.selectedStepIndex].data[0].inputs.splice(i, 1);
	}
	
	addOutput() {
		this.selectedIntegration.steps[this.selectedStepIndex].data[0].outputs.push( 
		{fieldId: 0, fieldLabel: ""}
	);
	}
	
	removeOutput(i:number) {
		this.selectedIntegration.steps[this.selectedStepIndex].data[0].outputs.splice(i,1);
	}
	
	setIndex(i:number) {
		console.log("inputStepIndex="+i);
	}
	
	test(){
		this.url = this.selectedIntegration.steps[this.selectedStepIndex].data[0].restApi.url;
		this.username = this.selectedIntegration.steps[this.selectedStepIndex].data[0].restApi.username;
		this.password = this.selectedIntegration.steps[this.selectedStepIndex].data[0].restApi.password;
		
		this._genericService.authenticate(this.username, this.password);
		
		this._genericService.get(this.url)
			.subscribe(
			data => this.stepOutputs = data,
			error => console.log(error)
			);
			
			console.log(this.stepOutputs);
			this.selectedIntegration.steps[this.selectedStepIndex].data[0].outputs = this.stepOutputs;

	}
	
	gotoDetail() {
	
	}

 }
