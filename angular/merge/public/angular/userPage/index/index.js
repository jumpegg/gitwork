'use strict';

angular.module('userPage.index', ['ngRoute'])
.config(['$routeProvider', function($routeProvider, $scope){
	$routeProvider.when('/',{
		templateUrl: 'angular/userPage/index/index.html',
		controller: 'indexCtrl'
	});
}])
.controller('indexCtrl', function($scope, user){
	user.getuser(function(data){
		$scope.loginUser = data[0];
	});
	user.getboards(function(data){
		$scope.adminBoards = data;
	});
	user.getjoinboards(function(data){
		$scope.joinboards = data;
	});
	
});
