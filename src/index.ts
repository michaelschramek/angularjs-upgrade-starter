import "./app/app.module";
import * as angular from 'angular';

angular.bootstrap(document, ["app"], {
    strictDi: true
});