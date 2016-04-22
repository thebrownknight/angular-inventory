import angular from 'angular';
import path from 'path';

const moduleName = 'vehicles.services';

const HTTP = new WeakMap();

class VehiclesService {
  constructor($http) {
    HTTP.set(this, $http);
  }

  fetchVehicles() {
    return HTTP.get(this)
      .get('/feeds/inventory.json');
  }

  static vehiclesFactory($http) {
    return new VehiclesService($http);
  }
}

VehiclesService.vehiclesFactory.$inject = ['$http'];

angular.module(moduleName, [])
  .factory('vehiclesService', VehiclesService.vehiclesFactory);

export default moduleName;
