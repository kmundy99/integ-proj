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

integrations: Integration[];
selectedIntegration: Integration;
selectedStep: Integration;
readWrite = ['Read', 'Write', 'Both'];
type = ['Lookup', 'Excel', 'Rest Api'];
lookup = ['State abbrev to state', 'Taleo Prefix to Fusion Prefix', 'Taleo Person Type to Fusion Person Type'];

constructor(private _firebaseService: FirebaseService) {
    this._firebaseService.getIntegration()
		.subscribe(
		integ => this.integrations = integ,
		error => console.log(error)
		);
		
		console.log(this.integrations);
  }

	
	ngOnInit() {
	}
	
	onSelect(integ: Integration) {
	this.selectedIntegration = integ;
	console.log(this.selectedIntegration.steps);
	}
	
	onSelects(step: Integration) {
	this.selectedStep= step;
	}

	addIntegration() {
		this.integrations.push(new Integration(3, "Update Integration Name", 3));
	}
	
	gotoDetail() {
	
	}

 }
