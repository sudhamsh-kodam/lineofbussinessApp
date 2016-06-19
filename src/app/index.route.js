(function() {
  'use strict';

  angular
    .module('lineofbussinessApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'aboutCtrl',
        controllerAs: 'vm'
      })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
