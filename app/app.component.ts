import {Component, OnInit} from '@angular/core';
import { Integration} from './integration';
import { IntegrationService } from './integration.service';
import { IntegrationComponent } from './integration.component';

@Component({
    selector: 'integration-app',
    template: `
	<h1>Integration Dashboard</h1>
     <integration></integration>
	`,
	providers: [
    IntegrationService],
    directives: [IntegrationComponent]
})

export class AppComponent {

 }
