import {Component, OnInit} from '@angular/core';
import { Integration} from './integration';
import { IntegrationService } from './integration.service';
import {NgIf} from '@angular/common';

@Component({
    selector: 'integration',
    templateUrl: 'app/integration.component.html',
	styleUrls:  ['app/integration.component.css']
})

export class IntegrationComponent implements OnInit {
integrations: Integration[];
selectedIntegration: Integration;
selectedStep: Integration;
readWrite = ['Read', 'Write', 'Both'];
type = ['Lookup', 'Excel', 'Rest Api'];
lookup = ['State abbrev to state', 'Taleo Prefix to Fusion Prefix', 'Taleo Person Type to Fusion Person Type'];


constructor(private integrationService: IntegrationService) {

	}

	getIntegrations() {
	this.integrationService.getIntegrations().then(integs => this.integrations = integs)
	}
	
	ngOnInit() {
	this.getIntegrations();
	}
	
	onSelect(integ: Integration) {
	this.selectedIntegration = integ;
	console.log(this.selectedIntegration.steps);
	}
	
	onSelects(step: Integration) {
	this.selectedStep= step;
	}

	
	gotoDetail() {
	
	}

 }
