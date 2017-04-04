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

      scope.updateItemValue = function() {
        scope.item.value = scope.newValue;
        scope.hideModal();
      };
    },
    templateUrl: '/view1/modal.html'
  };
});
