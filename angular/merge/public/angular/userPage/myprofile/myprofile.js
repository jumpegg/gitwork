'use strict';

angular.module('userPage.myprofile', ['ngRoute'])
.config(['$routeProvider', function($routeProvider, $scope){
	$routeProvider.when('/myprofile',{
		templateUrl: 'angular/userPage/myprofile/myprofile.html',
		controller: 'myprofileCtrl'
	});
}])
.controller('myprofileCtrl', function($scope, user){

});