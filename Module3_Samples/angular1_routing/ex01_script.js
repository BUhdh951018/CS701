var app = angular.module('myApp', ['ngRoute']);   
  
  // configure the routes
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        // route for the home page 
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/about', {
        // route for the about page
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    })
    .when('/contact/', {
        // route for the contact page 
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    })
    .otherwise({
        // none of the above
        templateUrl: 'pages/error.html',
        controller: 'errorController'
    });
});

app.controller('homeController', 
  function ($scope) {       
    $scope.message = 'Welcome to the home page!';
  });

app.controller('aboutController', 
  function ($scope) {
    $scope.message = 'More details about me!';
  });

app.controller('contactController', 
  function ($scope) {
    $scope.message = 'Contact us at 123-456-7890!';
  });

app.controller('errorController', 
  function ($scope, $location) {
    $scope.message = 'Bad path!';
    $scope.attemptedPath = $location.path();
  });















