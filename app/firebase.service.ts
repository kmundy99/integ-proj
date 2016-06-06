import { Injectable } from '@angular/core';
import { Integration} from './integration';
import 'rxjs/Rx';
import {Http, Headers} from '@angular/http';

@Injectable()
export class FirebaseService {

	constructor(private _http: Http) {
	}

	setIntegration(integ: [Integration]) {
		const body = JSON.stringify(integ);
		return this._http.put('https://integrations-3a5a9.firebaseio.com/integrations.json', body)
			.map(response => response.json());

		
	}

	getIntegration() {
		return this._http.get('https://integrations-3a5a9.firebaseio.com/integrations.json')
			.map(response => response.json());
	}

}