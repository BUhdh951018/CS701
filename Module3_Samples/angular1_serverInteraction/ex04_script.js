angular.module('Twitter', ['ngResource', 'myFilters'])
 .controller('TwitterController', function($scope, $resource) {
    $scope.twitter = $resource('http://kalathur.com/cs701/cgi-bin/getTwitterData.php',
        {q:'angularjs', callback:'JSON_CALLBACK'},
        {get:{method:'JSONP'}});

    $scope.doSearch = function () {
        $scope.twitterResult = 
        	$scope.twitter.get({q:$scope.searchTerm});
        console.log($scope.twitterResult);
    };
    
    $scope.searchTerm = "moocs";
    $scope.doSearch();
})
