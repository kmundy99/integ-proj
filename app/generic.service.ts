import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GenericService {

jwt: string;
authHeader: Headers;

	constructor(private _http: Http) {
	}
	
	
authenticate(username: string, password: string) {

  var creds = "username=" + username + "&password=" + password;

  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  this._http.post('http://localhost:3001/sessions/create', creds, {
    headers: headers
    })
    .map(res => res.json())
    .subscribe(
      data => this.saveJwt(data.id_token),
      err => this.logError(err),
      () => console.log('Authentication Complete')
    );
}


saveJwt(jwt: string) {
  if(jwt) {
    localStorage.setItem('id_token', jwt)
  }
 }

logError(err: string) {
	console.log(err);
}

getJwt() {
 	this.jwt = localStorage.getItem('id_token');
	this.authHeader = new Headers();

	if(this.jwt) {
		this.authHeader.append('Authorization', 'Bearer ' + this.jwt);      
	}
	this.authHeader.append('Content-Type', 'application/vnd.oracle.adf.resourceitem+json');
}

  
	patch( url:string, jsonPayload: string) {
		this.getJwt();
		return this._http.patch(url, jsonPayload)
			.map(response => response.json());		
	}


	get(url:string) {
		this.getJwt();
		return this._http.get(url, {headers: this.authHeader})
			.map(response => response.json());
	}



}