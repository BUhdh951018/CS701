angular.module("myApp",[])
 .controller('FlickrController', function($scope, $http) {

	$http.jsonp(
		'http://api.flickr.com/services/feeds/photos_public.gne', 
	 {
		params : {
			tags : 'magnolia',
			format : 'json',
			jsoncallback : 'JSON_CALLBACK'
		}
	 }).success(function(data, status, headers, config) {
		  console.log(data.items);
		  $scope.items = data.items;
	    });
})
