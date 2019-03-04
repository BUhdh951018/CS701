angular.module('myApp')
 .filter('underscore', function () {
	return function (value) {
		if (angular.isString(value)) {
			return value.replace(/\s+/g, "_");
		} else {
			return value;
		}
	};
 });

