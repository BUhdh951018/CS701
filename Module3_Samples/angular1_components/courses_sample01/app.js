// courses_sample01

angular.module('coursesApp', [])
  .controller('CourseListController', 
    function CourseListController($scope) {
      $scope.courses = [
        { 
          id: 'cs601',
          name: 'Web Application Development'
        }, 
        {
          id: 'cs602',
          name: 'Server-Side Web Development'
        }, 
        {
          id: 'cs683',
          name: 'Mobile Application Development'
        },  
        {
          id: 'cs701',
          name: 'Rich Internet Application Development'
        }
      ];
    });
