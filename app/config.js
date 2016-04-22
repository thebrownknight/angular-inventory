import uiRouter from 'angular-ui-router';
import vehiclesService from './services/vehicles.services';
import inventoryController from './inventory/inventory.controller';

const moduleName = "inventoryApp";

const app = angular.module(moduleName, [ uiRouter, vehiclesService ]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  ( $stateProvider, $urlRouterProvider, $locationProvider ) => {
    // $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('inventory', {
        url: '/',
        template: require('./inventory/inventory.html'),
        controller: inventoryController,
        controllerAs: 'inventory'
      });

    $locationProvider.html5Mode(true);
}]);

export default moduleName;
