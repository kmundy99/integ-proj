import {Component, OnInit} from '@angular/core';
import { Integration} from './integration';
import { FirebaseService } from './firebase.service';
import { IntegrationComponent } from './integration.component';

@Component({
    selector: 'integration-app',
    template: `
	<header>
		<nav id="header-nav" class="navbar navbar-default">
			<div class="container">
				<h1>Integration Dashboard</h1>
				<integration></integration>
			</div>
		</nav>
	</header>
	`,
	providers: [FirebaseService],
    directives: [IntegrationComponent]
})

export class AppComponent {

 }
