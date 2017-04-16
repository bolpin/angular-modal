angular.module('myApp.view1')

.directive('inviteModalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '=',
      players: '=',
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

      function duplicateName(name){
        return scope.players.findIndex(player => player.name==name) > -1;
      };

      scope.addNewPerson = function() {
        if (!scope.name) {
          scope.errors.push("Missing name");
        }
        if (!scope.score) {
          scope.errors.push("Missing score");
        }
        if (duplicateName(scope.name)) {
          scope.errors.push(scope.name + " is already in the list");
        }
        else if (scope.name && scope.score) {
          scope.players.unshift({"name" : scope.name, "score" : scope.score });
          scope.$parent.currentPage = 0; // TODO: fix this
        }
        scope.hideModal();
      };
    },
    templateUrl: '/view1/invite-modal.html'
  };
});
