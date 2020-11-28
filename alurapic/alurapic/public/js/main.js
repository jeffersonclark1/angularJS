angular.module('alurapic',['minhasDiretivas','ngAnimate','ngRoute'])
.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider.when('/fotos', {
    templateUrl: 'partials/principal.html',
    controller: 'FotosControllers'
  });

  $routeProvider.when('/fotos/create', {
    templateUrl: 'partials/foto.html',
    controller: 'FotoController'
  });

  $routeProvider.otherwise({
    redirectTo: '/fotos'
  });

});
