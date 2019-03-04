angular.module("coursesApp")
  .component('courseList', {
    template:
        `<ul>
          <li ng-repeat="course in $ctrl.courses">
            <span>{{course.id | uppercase}}</span>
            <p>{{course.name}}</p>
          </li>
        </ul>`,
    controller: function CourseListController() {
      this.courses = [
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
    }
  });
  