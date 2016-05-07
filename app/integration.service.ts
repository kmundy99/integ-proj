import { Integration } from './integration';
import { INTEGRATIONS } from './sample-integrations';
import { Injectable } from '@angular/core';

@Injectable()
export class IntegrationService {
  getIntegrations() {
  console.log(INTEGRATIONS);
    return Promise.resolve(INTEGRATIONS);
  }
}


  
  
