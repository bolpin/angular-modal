'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.inviteModalShown = false;
  $scope.errors = [];

  $scope.items = [
    {'score' : 0, 'name' : 'Professor Plum'},
    {'score' : 0, 'name' : 'Mrs. Peacock'},
    {'score' : 0, 'name' : 'Colonel Mustard'},
  ];

  $scope.resetErrors = function() {
    $scope.errors = [];
  }

  $scope.errorMessages = function() {
    var messages = "";
    for (var i = 0; i < $scope.errors.length; i++) {
      messages += scope.errors[i] + "<br/>";
    }
  }

  $scope.increment = function(index) {
    $scope.resetErrors();
    $scope.items[index].spinner = true;
    setTimeout(function() {
      $scope.items[index].score++;
      $scope.items[index].spinner = false;
      $scope.$apply();
    }, 500);
  };

  $scope.showModal = function(item) {
    $scope.resetErrors();
    $scope.modalShown = true;
    $scope.item = item;
  };

  $scope.showInviteModal = function() {
    $scope.resetErrors();
    $scope.inviteModalShown = true;
  };

}]);
