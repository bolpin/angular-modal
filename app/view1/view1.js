'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'peopleFactory', function($scope, peopleFactory) {
  $scope.modalShown = false;
  $scope.inviteModalShown = false;
  $scope.errors = [];
  $scope.pageSize = "5";
  $scope.currentPage = 0;
  $scope.sortType = "name";
  $scope.sortReverse = false;
  $scope.searchName = "";

  $scope.players = peopleFactory.getAll();

  $scope.resetErrors = function() {
    $scope.errors = [];
  }

  $scope.errorMessages = function() {
    var messages = "";
    for (var i = 0; i < $scope.errors.length; i++) {
      messages += scope.errors[i] + "<br/>";
    }
  }

  $scope.remove = function(name) {
    var players = $scope.players;

    $scope.resetErrors();

    var index = players.findIndex(player => player.name==name);

    players[index].spinner = true;

    setTimeout(function() {
      players.splice(index,1);
      $scope.$apply();
    }, 500);
  };

  $scope.increment = function(name) {
    var players = $scope.players;
    $scope.resetErrors();
    var index = players.findIndex(player => player.name==name);
    players[index].spinner = true;
    setTimeout(function() {
      players[index].score++;
      players[index].spinner = false;
      $scope.$apply();
    }, 500);
  };

  $scope.showModal = function(player) {
    $scope.resetErrors();
    $scope.modalShown = true;
    $scope.player = player;
  };

  $scope.showInviteModal = function() {
    $scope.resetErrors();
    $scope.inviteModalShown = true;
  };

  $scope.numberOfPages=function(){
    return Math.ceil($scope.players.length/$scope.pageSize);
  }

  $scope.$watch('pageSize', function(newValue,oldValue){
    $scope.currentPage = 0;
  },true);

  $scope.$watch('search.name', function(newValue,oldValue){
    $scope.currentPage = 0;
  },true);

}])

.filter('startFrom', function() {
  return function(input, start) {
    start = +start; //parse to int
    return input.slice(start);
  }
});
