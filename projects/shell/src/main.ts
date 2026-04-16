import { bootstrapApplication } from '@angular/platform-browser';
import { initFederation } from '@angular-architects/module-federation';
import { AppComponent } from './app/app-component/app-component';

initFederation('/assets/federation.manifest.json')
  .then(() => bootstrapApplication(AppComponent))
  .catch(err => console.error(err));