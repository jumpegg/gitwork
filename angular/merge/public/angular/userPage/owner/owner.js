'use strict';

angular.module('userPage.owner', ['ngRoute'])
.config(['$routeProvider', function($routeProvider, $scope){
	$routeProvider.when('/owner',{
		templateUrl: 'angular/userPage/owner/owner.html',
		controller: 'ownerCtrl'
	});
}])
.controller('ownerCtrl', function($scope, user){

	
});