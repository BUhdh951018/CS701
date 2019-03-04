angular.module('courseDetail').
  component('courseDetail', {
    templateUrl: 'course-detail/course-detail.template.html',
    controller: ['$http', '$routeParams',
      function CourseDetailController($http, $routeParams) {
      	var self = this;

        self.courseId = $routeParams.courseId;
        self.ready = false;

        var url = 'http://kalathur.com/php/getCourseInfo.php?id=' + self.courseId;
        $http.get(url).then(function(response) {
          self.ready = true;
          self.course = response.data;
        });

      }
    ]
  });

  