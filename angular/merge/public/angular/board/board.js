'use strict';

angular.module('board',[
	'ngRoute',
	'ngAnimate',
	'board.index'
	])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);