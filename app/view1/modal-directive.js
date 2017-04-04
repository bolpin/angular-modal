angular.module('myApp.view1')

.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=',
      show: '='
    },
    replace: true,
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;

      scope.hideModal = function() {
        scope.show = false;
      };

      scope.updateItemScore = function() {
        scope.item.score = scope.newScore;
        scope.hideModal();
      };
    },
    templateUrl: '/view1/modal.html'
  };
});
