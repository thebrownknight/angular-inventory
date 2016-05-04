import angular from 'angular';
import path from 'path';

const moduleName = 'vehicles.services';

const HTTP = new WeakMap();

class VehiclesService {
  constructor($http) {
    HTTP.set(this, $http);
    this.vehicles = HTTP.get(this).get('/feeds/inventory.json').then(result => result.data);

    /** TODO: Need to figure out different way to copy vehicles to filtered vehicles. **/
    this.filteredVehicles = HTTP.get(this).get('/feeds/inventory.json').then(result => result.data);
  }

  addToCompareList() {

  }

  /* Setters */
  setFilters() {

  }
  setSortingParameters() {

  }

  /* Getters */
  getFullVehicles() {
    return this.vehicles;
  }
  getFilteredVehicles() {
    return this.filteredVehicles;
  }
  getFilters() {

  }
  getSortingParameters() {

  }
}

VehiclesService.$inject = ['$http'];

export default angular.module(moduleName, [])
  .service('vehiclesService', VehiclesService)
  .name;
