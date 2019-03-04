angular.module("myApp",[])
 .controller('PlaylistController', function($scope, $http) {
	$http.get('cgi-bin/getData.php', {
	  params : {
		url : "http://kalathur.com/cs701/html5/playList.xml"
	  }
	}).success(function(data, status, headers, config) {
		// Use X2JS to convert XML to JSON
		var json = x2js.xml_str2json(data);
		console.log(json);
		$scope.items = json.playlist.song;
	}).error(function(data, status, headers, config) {
		alert('Http Error');
	});
})
