angular.module('myApp.view1')

.directive('inviteModalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      items: '=',
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

      scope.addNewPerson = function() {
        scope.items.push({"name" : scope.name, "score" : scope.score });
        scope.hideModal();
      };
    },
    templateUrl: '/view1/invite-modal.html'
  };
});
