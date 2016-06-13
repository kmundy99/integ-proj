import {Component, OnInit} from '@angular/core';
import { Integration} from './integration';
import { IntegrationService } from './integration.service';
import {NgIf} from '@angular/common';
import {FirebaseService} from './firebase.service';

@Component({
    selector: 'integration',
    templateUrl: 'app/integration.component.html',
	styleUrls:  ['app/integration.component.css'],
	providers: [FirebaseService]
})

export class IntegrationComponent implements OnInit {

integrations: [Integration];
selectedIntegration: Integration;
selectedStep: Integration;
readWrite = ['Read', 'Write', 'Both'];
type = ['Lookup', 'Excel', 'Rest Api'];
lookup = ['State abbrev to state', 'Taleo Prefix to Fusion Prefix', 'Taleo Person Type to Fusion Person Type'];
saveData: string;
selectedStepIndex: number;
	
constructor(private _firebaseService: FirebaseService) {
    this._firebaseService.getIntegration()
		.subscribe(
		integ => this.integrations = integ,
		error => console.log(error)
		);
		
		console.log(this.integrations);
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
	
	addInput() {
	this.selectedIntegration.steps[this.selectedStepIndex].data[0].inputs.push( 
	{sourceStepId: 0, sourceFieldId: 0, overrideLabel: ""}
	);
	}
	
	addOutput() {
	this.selectedIntegration.steps[this.selectedStepIndex].data[0].outputs.push( 
	{fieldId: 0, fieldLabel: ""}
	);
	}
	
	gotoDetail() {
	
	}

 }
