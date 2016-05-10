class FiltersController {
  constructor(vehiclesService) {
    this.vService = vehiclesService;
  }
}

FiltersController.$inject = ['vehiclesService'];

export default FiltersController;
