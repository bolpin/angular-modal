angular.module('myApp.view1')

.directive('editModalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      player: '=',
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

      scope.updatePlayerScore = function() {
        if (!scope.newScore) {
          scope.errors.push("Missing score");
        } else {
          scope.player.score = scope.newScore;
        }
        scope.hideModal();
      };
    },
    templateUrl: '/view1/edit-modal.html'
  };
});
