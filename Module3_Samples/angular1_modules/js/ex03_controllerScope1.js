var myModule = angular.module('myApp', []);

myModule.controller('ParentController', function ($scope) {
      $scope.courseName = 'RIA';
      $scope.courseId = 'CS701 A1';
      $scope.tuition = 3000;
    });

myModule.controller('ChildController', function ($scope) {
    	$scope.courseId = 'CS701 OL';
      $scope.tuition = $scope.tuition + 200;
    });
 
















