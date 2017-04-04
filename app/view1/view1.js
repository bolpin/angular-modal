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

  $scope.items = [
    {'value' : 0, 'name' : 'Professor Plum'},
    {'value' : 0, 'name' : 'Mrs. Peacock'},
    {'value' : 0, 'name' : 'Colonel Mustard'},
  ];

  $scope.increment = function(index) {
    $scope.items[index].spinner = true;
    setTimeout(function() {
      $scope.items[index].value++;
      $scope.items[index].spinner = false;
      $scope.$apply();
    }, 500);
  };

  $scope.showModal = function(item) {
    $scope.modalShown = true;
    $scope.item = item;
  };

  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

}]);
