angular.module("coursesApp")
  .component('courseList', {
    templateUrl: 'course-list/course-list.template.html',
    controller: function CourseListController() {
      this.courses = [
        { 
          id: 'cs601',
          name: 'Web Application Development',
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

      this.orderingOptions = [
          { text: 'Sequential',   value: 'id'},
          { text: 'Alphabetical', value: 'name'}
      ];

      this.orderProp = 'name';

    }
  });
  