import angular from 'angular';

import FiltersController from './filters.controller';
import vehiclesService from '../services/vehicles.services';

const moduleName = 'inventoryApp.filters';

export default angular.module(moduleName, [vehiclesService])
  .controller('FiltersController', FiltersController)
  .name;
