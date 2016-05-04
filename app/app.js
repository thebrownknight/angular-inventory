import 'bootstrap-sass';
import angular from 'angular';
import inventoryApp from './config';

angular.element(document).ready(function(){
  angular.bootstrap(document, [inventoryApp]);
});
