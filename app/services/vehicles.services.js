import angular from 'angular';
import path from 'path';

const moduleName = 'vehicles.services';

const HTTP = new WeakMap();

class VehiclesService {
  constructor($http) {
    HTTP.set(this, $http);
    this.vehicles = HTTP.get(this).get('/feeds/inventory.json').then(result => result.data);
  }

  getFullVehicles() {
    return this.vehicles;
  }

  addToCompareList() {

  }

  /* Setters and Getters */
  setFilters() {

  }
  getFilters() {

  }

  setSortingParameters() {

  }
  getSortingParameters() {

  }
}

VehiclesService.$inject = ['$http'];

export default angular.module(moduleName, [])
  .service('vehiclesService', VehiclesService)
  .name;
