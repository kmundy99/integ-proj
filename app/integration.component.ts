import {Component, OnInit} from '@angular/core';
import { Integration} from './integration';
import { IntegrationService } from './integration.service';

@Component({
    selector: 'integration',
    templateUrl: 'app/integration.component.html',
	styleUrls:  ['app/integration.component.css'],
})

export class IntegrationComponent implements OnInit {
integrations: Integration[];
selectedIntegration: Integration;
selectedStep: Integration.steps;

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
	}
	
	onSelects(step: Integration.steps) {
	this.selectedStep= step;
	}
	
	gotoDetail() {
	
	}

 }
