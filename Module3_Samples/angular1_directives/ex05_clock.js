angular.module('time', [])
 .controller('TimeController', function ($scope) {
  $scope.format = 'M/d/yy h:mm:ss a';
 })
 .directive('myCurrentTime', function($timeout, dateFilter) {
    return function(scope, element, attrs) {
      var format, timeoutId; 
 
      // used to update the UI
      function updateTime() {
        element.text(dateFilter(new Date(), format));
      }
 
      // watch the expression, and update the UI on change.
      scope.$watch(attrs.myCurrentTime, function(value) {
        format = value;
        updateTime();
      });
 
      // schedule update in one second
      function updateLater() {
        timeoutId = $timeout(function() {
          updateTime(); // update DOM
          updateLater(); // schedule another update
        }, 1000);
      }
 
      element.bind('$destroy', function() {
        $timeout.cancel(timeoutId);
      });
 
      updateLater(); // kick off the UI update process.
    }
  });
  