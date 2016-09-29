'use strict';

angular.module('userPage',[
	'ngRoute',
	'userPage.index',
	'userPage.owner',
	'userPage.myprofile',
	'ngAnimate'
	])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
  
}])
.controller('userCtrl', function($scope, user){
	$scope.menuStatus = true;
	$scope.toggleMenu = function(){
		$scope.menuStatus = $scope.menuStatus === false ? true: false;
	};
	$scope.CreateStudy = function(input){
		var jinput = JSON.stringify(input);
		user.setboard(jinput);
		
		user.getboards(function(data){
			$scope.adminBoards = data;
		});

	};
	user.getuser(function(data){
		$scope.loginUser = data[0];
		console.log($scope.loginUser);
	});
	user.getboards(function(data){
		$scope.adminBoards = data;
	});
	user.getjoinboards(function(data){
		$scope.joinboards = data;
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
		},
		getboard: function(input, callback){
			$http({
				method: 'get',
				url:'/getboard/'+input
			}).success(function(data, status, headers, config){
				callback(data);
			}).error(function(data, status, headers, config){
				console.log(status);
			});
		},
		updateboard: function(input){
			$http({
				method: 'post',
				url:'/updateStudy',
				data: input
			}).success(function(data, status, headers, config){
				if(data.result == "success"){
					alert('등록되었습니다.');
				}else{
					alert('등록 실패');
				}
			}).error(function(data, status, headers, config){
				alert(status);
			});
		},
		setboard: function(input){
			$http({
				method: 'post',
				url:'/newStudy',
				data: input
			}).success(function(data, status, headers, config){
				if(data.result == "success"){
					alert('등록되었습니다.');
				}else{
					alert('등록 실패');
				}
			}).error(function(data, status, headers, config){
				alert(status);
			});
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
		},
		setuserinfo: function(input){
			$http({
				method: 'post',
				url:'/userPage/edit',
				data: input
			}).success(function(data, status, headers, config){
				if(data.message == 'success'){
					alert('등록되었습니다.');
				}else{
					alert('서버에러');
				};
			}).error(function(data, status, headers, config){
				console(status);
			});
		}
	}
});