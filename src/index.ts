import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { setAngularLib } from '@angular/upgrade/static';
import * as angular from 'angular';

setAngularLib(angular);
platformBrowserDynamic().bootstrapModule(AppModule);