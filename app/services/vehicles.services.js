import angular from 'angular';
import path from 'path';

import Utils from '../utilities/utilities';

const moduleName = 'vehicles.services';

const HTTP = new WeakMap();
const Q = new WeakMap();

let instance = null;

class VehiclesService {
  constructor($http, $q) {
    HTTP.set(this, $http);
    Q.set(this, $q);

    if( !instance ) {
      instance = this;
      this.vehicles = [];
      this.filteredVehicles = [];
      this.filters = {};
    }

    return instance;
  }

  /**
   * TODO: Need to write functionality to add to compare list.
   */
  addToCompareList() {

  }

  /**
   * filterVehicles: Method that handles all the filtering cases.
   */
  filterVehicles() {
    let nFilteredVehicles = angular.copy(this.vehicles);
    let activeFilters = this.filters;

    Object.keys(activeFilters).forEach(function(filterKey, index){
      let filterValue = activeFilters[filterKey];

      switch(filterKey) {
        case 'quickFilter':
          if ( filterValue === "New Conversions" || filterValue === "Used Conversions" ) {
            nFilteredVehicles = nFilteredVehicles.filter(function(element, index){
              return filterValue.indexOf(element.conversion_option) > -1;
            });
          } else if ( filterValue === "Specials" ) {
            nFilteredVehicles = nFilteredVehicles.filter(function(element, index) {
              return parseInt(element.current_discount) > 0;
            });
          }
          break;
        case 'stockNumber':
          nFilteredVehicles = nFilteredVehicles.filter(function(element, index){
            return element.name.indexOf(filterValue) > -1;
          });
          break;
        default:
          break;
      }

    });

    // Store the filteredVehicles in the singleton in case we need to access it later.
    this.filteredVehicles = angular.copy(nFilteredVehicles);

    return this.filteredVehicles;
  }

  /* Setters */
  setFilter(filterKey, filterValue) {
    this.filters[filterKey] = filterValue;
  }
  setSortingParameters() {

  }

  /* Getters */
  getFullVehicles() {
    let defer = Q.get(this).defer();
    let self = this;
    HTTP.get(this).get('/feeds/inventory.json')
      .then(function(result){
        self.vehicles = result.data;
        self.filteredVehicles = result.data;
        defer.resolve(result.data);
      });

    return defer.promise;
  }
  getFilteredVehicles() {
    return this.filteredVehicles;
  }
  getFilters() {
    return this.filters;
  }
  getSortingParameters() {

  }
}

VehiclesService.$inject = ['$http', '$q'];

export default angular.module(moduleName, [])
  .service('vehiclesService', VehiclesService)
  .name;
