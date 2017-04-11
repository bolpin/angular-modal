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
  $scope.pageSize = "5";
  $scope.currentPage = 0;

  $scope.items = [
    {'score' : 0, 'name' : 'Mrs. White'},
    {'score' : 0, 'name' : 'Mr. Green'},
    {'score' : 0, 'name' : 'Miss Scarlet'},
    {'score' : 0, 'name' : 'Professor Plum'},
    {'score' : 0, 'name' : 'Mrs. Peacock'},
    {'score' : 0, 'name' : 'Colonel Mustard'},
    {'score' : 0, 'name' : 'Agustus'},
    {'score' : 0, 'name' : 'Nero'},
    {'score' : 0, 'name' : 'Caligula'},
    {'score' : 0, 'name' : 'Claudius'},
    {'score' : 0, 'name' : 'Tiberius'},
    {'score' : 0, 'name' : 'Trajan'},
    {'score' : 0, 'name' : 'Commodus'},
    {'score' : 0, 'name' : 'Domitian'},
    {'score' : 0, 'name' : 'Publius Aelius Hadrianus'},
    {'score' : 0, 'name' : 'Marcus Aurelius'},
    {'score' : 0, 'name' : 'Vespasian'},
    {'score' : 0, 'name' : 'Nerva'},
    {'score' : 0, 'name' : 'Titus'},
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

  $scope.remove = function(items, indexOnPage) {
    $scope.resetErrors();

    var index = indexOnPage + $scope.pageSize * $scope.currentPage;

    items[index].spinner = true;

    setTimeout(function() {
      items.splice(index,1);
      $scope.$apply();
    }, 500);
  };

  $scope.increment = function(indexOnPage) {
    $scope.resetErrors();
    var index = indexOnPage + $scope.pageSize * $scope.currentPage;
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

  $scope.numberOfPages=function(){
    return Math.ceil($scope.items.length/$scope.pageSize);
  }

  $scope.$watch('pageSize', function(newValue,oldValue){
    $scope.currentPage = 0;
  },true);

}])

.filter('startFrom', function() {
  return function(input, start) {
    start = +start; //parse to int
    return input.slice(start);
  }
});
