import angular from 'angular';
import vehicleTemplate from './vehicle.html';

const moduleName = 'vehicle.directive';

function ivehicle() {
  return {
    restrict: 'E',
    scope: {
      vehicle: '='
    },
    template: vehicleTemplate
  };
}

export default angular.module(moduleName, [])
  .directive('ivehicle', ivehicle)
  .name;
