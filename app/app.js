import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('InventoryApp', [uiRouter]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  ( $stateProvider, $urlRouterProvider, $locationProvider ) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('inventory', {
        url: '/',
        template: require('./inventory/inventory.html')
      });

    $locationProvider.html5Mode(true);
}]);

angular.element(document).ready(function(){
  angular.bootstrap(document, ['InventoryApp']);
});
