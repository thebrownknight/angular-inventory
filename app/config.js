import uiRouter from 'angular-ui-router';
import inventory from './inventory';

const moduleName = "inventoryApp";
angular.module(moduleName, [ uiRouter, inventory ])
  .config(['$urlRouterProvider', '$locationProvider',
  ( $urlRouterProvider, $locationProvider ) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}]);

export default moduleName;
