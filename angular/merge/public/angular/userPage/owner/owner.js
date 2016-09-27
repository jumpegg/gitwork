'use strict';

angular.module('userPage.owner', ['ngRoute'])
.config(['$routeProvider', function($routeProvider, $scope){
	$routeProvider.when('/owner',{
		templateUrl: 'angular/userPage/owner/owner.html',
		controller: 'ownerCtrl'
	});
}])
.controller('ownerCtrl', function($scope, user){
	$scope.filteredAdmins = [];
	$scope.itemsPerPage = 10;
	$scope.currentPage = 1;

	$scope.figureOutAdmins = function(){
		var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
		var end = begin + $scope.itemsPerPage;
		$scope.filteredAdmins = $scope.adminBoards.slice(begin, end);
	};

	$scope.beforeUpdate = function(input){
		user.getboard(input, function(data){
			$scope.updateStudy = data[0];
		});
	};

	$scope.upStudy = function(input){
		var jinput = JSON.stringify(input);
		user.updateboard(jinput);

		user.getboards(function(data){
			$scope.adminBoards = data;
		});
	};
	$scope.pageChanged = function() {
    $scope.figureOutAdmins();
  };

	$scope.figureOutAdmins();
});
/*
var todos = angular.module('todos', ['ui.bootstrap']);

todos.controller('TodoController', function($scope) {
  $scope.filteredTodos = [];
  $scope.itemsPerPage = 30;
  $scope.currentPage = 4;
  
  $scope.makeTodos = function() {
    $scope.todos = [];
    for (i=1;i<=1000;i++) {
      $scope.todos.push({ text:'todo '+i, done:false});
    }
  };
  
  $scope.figureOutTodosToDisplay = function() {
    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
    var end = begin + $scope.itemsPerPage;
    $scope.filteredTodos = $scope.todos.slice(begin, end);
  };
  
  $scope.makeTodos(); 
  $scope.figureOutTodosToDisplay();

  $scope.pageChanged = function() {
    $scope.figureOutTodosToDisplay();
  };
  
});
*/
