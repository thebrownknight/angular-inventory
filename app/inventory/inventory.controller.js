const INIT = new WeakMap();
const SERVICE = new WeakMap();

class InventoryController {
  constructor(vehiclesService) {
    SERVICE.set(this, vehiclesService);
    INIT.set(this, () => {
      SERVICE.get(this).fetchVehicles().then(vehicles => {
        this.vehiclesList = vehicles.data;
      });
    });

    INIT.get(this)();
  }
}

InventoryController.$inject = ['vehiclesService'];

export default InventoryController;
