'use strict';

angular.module('userPage.index', ['ngRoute'])
.config(['$routeProvider', function($routeProvider, $scope){
	$routeProvider.when('/',{
		templateUrl: 'angular/userPage/index/index.html',
		controller: 'indexCtrl'
	});
}])
.controller('indexCtrl', function($scope, user){

	
});