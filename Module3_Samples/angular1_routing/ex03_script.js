var app = angular.module('contactManager', ['ngRoute']);

// routing cases
app.config(
  function($routeProvider) {
    $routeProvider.when('/index', {
      templateUrl: 'contacts/index.html'
    })
    .when('/info/:id', {
      templateUrl: 'contacts/info.html',
      controller: 'InfoController'
    })
    .when('/add', {
      templateUrl: 'contacts/add.html',
      controller: 'AddController'
    })
    .when('/edit/:id', {
      templateUrl: 'contacts/edit.html',
      controller: 'EditController'
    })
    .when('/remove/:id', {
      templateUrl: 'contacts/remove.html',
      controller: 'RemoveController'
    })
    .otherwise({
      redirectTo: '/index'
    });
  });
  
// Controllers

app.controller('ContactController', function ($scope) {
	$scope.contacts = [{
		name : 'Suresh Kalathur',
		phone : '617-358-0006',
		address1 : '808 Commonwealth Ave, Room 250', 
		address2:  'Boston, MA 02215'
	}];
});

app.controller('InfoController', 
	function ($scope, $routeParams) {
		$scope.contact = $scope.contacts[$routeParams.id];
});

app.controller('AddController', 
	function ($scope, $location) {
		$scope.contact = {};
		$scope.add = function() {
			$scope.contacts.push($scope.contact);
			$location.url('/');
		};
});

app.controller('EditController', 
	function ($scope, $routeParams, $location) {
		$scope.contact = $scope.contacts[$routeParams.id];
		$scope.edit = function() {
			$scope.contacts[$routeParams.id] = $scope.contact;
			$location.url('/');
		};
});

app.controller('RemoveController', 
	function ($scope, $routeParams, $location) {
		$scope.contact = $scope.contacts[$routeParams.id];
		$scope.remove = function() {
			$scope.contacts.splice($routeParams.id, 1);
			$location.url('/');
		};
		$scope.back = function() {
			$location.url('/');
		};
});
