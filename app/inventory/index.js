import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './inventory.routes';
import InventoryController from './inventory.controller';
import vehiclesService from '../services/vehicles.services';
import ivehicle from '../vehicle/vehicle.directive';

import FiltersController from '../filters/filters.controller';

const moduleName = 'inventoryApp.inventory';

export default angular.module(moduleName, [uirouter, vehiclesService, ivehicle])
  .config(routing)
  .controller('InventoryController', InventoryController)
  .controller('FiltersController', FiltersController)
  .name;
