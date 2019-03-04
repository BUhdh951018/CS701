angular.module('coursesApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/courses', {
          template: '<course-list></course-list>'
        }).
        when('/courses/:courseId', {
          template: '<course-detail></course-detail>'
        }).
        otherwise('/courses');
    }
  ]);
  