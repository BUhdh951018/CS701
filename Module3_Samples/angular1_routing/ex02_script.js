var app = angular.module('routingSample', ['ngRoute']);

	// Specify the routing
app.config(function($routeProvider) {
  $routeProvider
  .when('/Course/:courseId', 
  	{
    	templateUrl: 'courses/course.html',
    	controller: 'CourseController'
  	})
  .when('/Course/:courseId/Term/:termId', 
  	{
    	templateUrl: 'courses/syllabus.html',
    	controller: 'TermController'
  	})
  .otherwise(
    {
      templateUrl: 'courses/main.html'
    });
});
 
 // Controllers
app.controller('MainController', 
  function ($scope, $route, 
						  $routeParams, $location) {
    $scope.$route = $route;
    $scope.$routeParams = $routeParams;
    $scope.$location = $location;
    $scope.name = "Main Controller...";
});
 
app.controller('CourseController', 
  function ($scope, $routeParams) {
    $scope.name = "Course Controller...";
    $scope.params = $routeParams;
});
 
app.controller('TermController', 
  function ($scope, $routeParams) {
    $scope.name = "Term Controller...";
    $scope.params = $routeParams;
});

















