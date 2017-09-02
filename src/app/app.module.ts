import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {downgradeComponent, UpgradeModule} from '@angular/upgrade/static';
import * as angular from 'angular';
import {AppComponent} from "./app.component";

import './app.module.ajs';

angular.module('app').directive('appRoot', downgradeComponent({component: AppComponent}));

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
        BrowserModule,
        UpgradeModule,
    ],
    // List all downgraded Angular components here
    entryComponents: [
        AppComponent
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['app'], { strictDi: true });
    }
}