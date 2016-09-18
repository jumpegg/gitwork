'use strict';

angular.module('board',[
	'ngRoute',
	'ngAnimate',
	'board.index'
	])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}])
.controller('boardCtrl', function($scope){

})
.factory('boardService', function($http){
	return{
		getguest: function(callback){
			$http.get('/board/getguest')
			.success(function(data){
				callback(data);
			}).error(function(status){
				console.log(status);
			});
		},
		getfreetalk: function(callback){
			$http.get('/board/getfreetalk')
			.success(function(data){
				callback(data);
			}).error(function(status){
				console.log(status);
			});
		},
		getnotice: function(callback){
			$http.get('/board/getnotice')
			.success(function(data){
				callback(data);
			}).error(function(status){
				console.log(status);
			});
		},
		getschedule: function(callback){
			$http.get('/board/getschedule')
			.success(function(data){
				callback(data);
			}).error(function(status){
				console.log(status);
			});
		},
		getattendUser: function(callback){
			$http.get('/board/getattendUser')
			.success(function(data){
				callback(data);
			}).error(function(status){
				console.log(status);
			});
		}

	}
});