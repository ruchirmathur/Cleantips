import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import Amplify from '@aws-amplify/core';
import * as awsamplify from './aws-exports';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
Amplify.configure(awsamplify.awsmobile);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
