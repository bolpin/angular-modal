angular.module('myApp.view1')

.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=',
      show: '=',
      errors: '='
    },
    replace: true,
    transclude: true,
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
        if (!scope.newScore) {
          scope.errors.push("Missing score");
        } else {
          scope.item.score = scope.newScore;
        }
        scope.hideModal();
      };
    },
    templateUrl: '/view1/modal.html'
  };
});
