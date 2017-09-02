import "./app/app.module";
import * as angular from 'angular';

angular.module('app', [
  "app.application"
]);

angular.bootstrap(document, ["app"], {
    strictDi: true
});