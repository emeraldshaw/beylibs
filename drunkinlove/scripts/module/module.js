var app = angular.module('beylibsApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      controller: '',
      templateUrl: ''
    })
    .when('/', {
      controller: '',
      templateUrl: ''
    });

    $locationProvider.hashPrefix('');

});
