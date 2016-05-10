import Utils from '../utilities/utilities';

class InventoryController {
  constructor(vehiclesService, $scope) {
    // Store references to this and the vehicles service.
    let self = this;
    this.vService = vehiclesService;

    // Initially we get all the vehicles from the promise to display.
    this.vService.getFullVehicles()
      .then(result => this.filteredVehicles = result);

    // We set a $watch on the filters to check when they change.
    // When any filters are updated, we make a call to filterVehicles
    // to run through the filters and apply them.
    $scope.$watch(function() {
      return vehiclesService.filters;
    }, function(newVal, oldVal) {
      if ( !Utils.isEmpty(newVal) ) {
        self.filteredVehicles = vehiclesService.filterVehicles();
      }
    }, true);
  }
}

InventoryController.$inject = ['vehiclesService', '$scope'];

export default InventoryController;
