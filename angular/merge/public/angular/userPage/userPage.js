'use strict';

angular.module('userPage',[
	'ngRoute',
	'userPage.index'
	])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}])
.controller('userCtrl', function($scope, user){
	$scope.CreateStudy = function(input){
		var jinput = JSON.stringify(input);
		user.setboard(jinput);
	};
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
		},
		setboard: function(input){
			$http({
				method: 'post',
				url:'/newStudy',
				data: input,
			}).success(function(data, status, headers, config){
				if(data.result == "success"){
					alert('등록되었습니다.');
				}else{
					alert('등록 실패');
				}
			}).error(function(data, status, headers, config){
				alert(status);
			})
		},
		getjoinboards: function(callback){
			$http({
				method: 'get',
				url:'/getjoinboards'
			}).success(function(data, status, headers, config){
				callback(data);
			}).error(function(data, status, headers, config){
				console.log('error');
			});
		}
	}
});