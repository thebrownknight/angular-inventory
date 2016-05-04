class FiltersController {
  constructor(vehiclesService) {
    vehiclesService.getFilteredVehicles()
      .then(result => this.filteredVehicles = result);
  }

  setFilter(filterKey, filterValue) {
    console.log(filterKey + " " + filterValue);
  }
}

FiltersController.$inject = ['vehiclesService'];

export default FiltersController;
