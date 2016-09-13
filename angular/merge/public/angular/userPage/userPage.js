'use strict';

angular.module('userPage',[
	'ngRoute',
	'userPage.index'
	])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);