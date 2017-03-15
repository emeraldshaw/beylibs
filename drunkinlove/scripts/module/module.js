var app = angular.module('beylibsApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/userinput', {
      controller: 'inputCtrl',
      templateUrl: 'views/form.html'
    })
    .when('/', {
      controller: '',
      templateUrl: ''
    });

    $locationProvider.hashPrefix('');

});
