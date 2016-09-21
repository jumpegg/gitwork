'use strict';

angular.module('board.studydata', ['ngRoute'])
.config(['$routeProvider', function($routeProvider, $scope){
	$routeProvider.when('/studydata',{
		templateUrl: '../angular/board/studydata/studydata.html',
		controller: 'studydataCtrl'
	});
}])
.controller('studydataCtrl', function($scope){

});