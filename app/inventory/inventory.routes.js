routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('inventory', {
      url: '/',
      template: require('./inventory.html')
    });
}
