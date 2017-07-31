import angular           from 'angular';
import uiRouter          from 'angular-ui-router';
import common            from './common/common';
import components        from './components/components';
import { AppComponent }  from './app.component';
import { TestComponent } from "./components/test/test_component";

const root = angular
             .module('angularCamp', [ uiRouter, common, components ])
             .component('acApp', AppComponent )
             .component("testComponent", TestComponent)
             .config(($stateProvider, $urlRouterProvider) => {
               $stateProvider
                  .state("tests", {
                    url: "/",
                    component: "testComponent"
                  });
             })
             .name;

//document.addEventListener( "DOMContentLoaded", () => angular.bootsrap(document, ['angularCamp']) );
angular.element(document).ready(function() {
    angular.bootstrap(document, ['angularCamp']);
});

export default root;
