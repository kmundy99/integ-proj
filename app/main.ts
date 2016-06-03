import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {FORM_PROVIDERS} from '@angular/common';
import {FirebaseService} from './firebase.service';

/*
if (environment.production) {
  enableProdMode();
}
*/
bootstrap(AppComponent, [HTTP_PROVIDERS, FORM_PROVIDERS, FirebaseService]);
