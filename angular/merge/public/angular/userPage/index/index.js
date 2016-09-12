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
})
.factory('user',function($http){
	return{
		getuser: function(callback){
			$http({
				method: 'get',
				url:'/getuser'
			}).success(function(data, status, headers, config){
				console.log("success");
				callback(data);
			}).error(function(data, status, headers, config){
				console.log("error");
			});
		},
		getboards: function(callback){
			$http({
				method: 'get',
				url:'/getboards'
			}).success(function(data, status, headers, config){
				callback(data);
			}).error(function(data, status, headers, config){
				console.log('error');
			});
		}
	}
});
