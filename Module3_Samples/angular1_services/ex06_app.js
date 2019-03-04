angular.module('myApp', [])
 .controller('SampleController', 
 							function ($scope, $interval) {
  // invoke the specified function every second
    $interval(function() {
    		$scope.time = new Date();
    }, 1000);
});

