import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Http, Headers} from '@angular/http';

@Injectable()
export class GenericService {

	constructor(private _http: Http) {
	}

	patch(jsonPayload: string, url: string) {
		return this._http.patch(url, jsonPayload)
			.map(response => response.json());

		
	}

	get(url: string) {
		return this._http.get(url)
			.map(response => response.json());
	}

}