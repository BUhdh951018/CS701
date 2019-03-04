angular.module('myApp', [])
 .controller('HelloController', function ($scope) {
		$scope.greeting = "Hello World 123";
	})
 .filter('underscore', function () {
	return function (value) {
		if (angular.isString(value)) {
			return value.replace(/\s+/g, "_");
		} else {
			return value;
		}
	};
 });

