class InventoryController {
  constructor(vehiclesService) {
    vehiclesService.getFullVehicles()
      .then(result => this.allVehicles = result);
  }
}

InventoryController.$inject = ['vehiclesService'];

export default InventoryController;
