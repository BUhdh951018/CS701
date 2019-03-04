angular.module("courseList")
  .component('courseList', {
    templateUrl: 'course-list/course-list.template.html',
    controller: function CourseListController($http) {
      var self = this;

      self.orderingOptions = [
          { text: 'Sequential',   value: 'id'},
          { text: 'Alphabetical', value: 'name'},
          { text: 'Contact',         value: 'contact'},
          { text: 'Type',         value: 'type'}
      ];

      self.orderProp = 'id';
      
      $http.get('courses/courses.json').then(function(response) {
        self.courses = response.data;
      });

    }
  });


// For Minification
  /*

  angular.module('coursesApp')
   .component('courseList', {
    templateUrl: 'course-list/course-list.template.html',
    controller: ['$http', function CourseListController($http) {
        var self = this;
        self.orderingOptions = [
          { text: 'Sequential',   value: 'id'},
          { text: 'Alphabetical', value: 'name'},
          { text: 'Contact',         value: 'contact'},
          { text: 'Type',         value: 'type'}
      ];

      self.orderProp = 'id';
      

        $http.get('courses/courses.json').then(function(response) {
          self.courses = response.data;
        });
      }
    ]
  });

  */