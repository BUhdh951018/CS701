angular.module('ITunes', ['ngResource', 'myFilters'])
 .controller('ITunesController', function($scope, $resource) {
    $scope.iTunes = $resource('https://itunes.apple.com/:action',
        {action: "search", term:'jackson', media:'musicVideo',
            callback:'JSON_CALLBACK'},
        {get:{method:'JSONP'}});

    $scope.doSearch = function () {
        $scope.iTunesResult = 
        	$scope.iTunes.get({term:$scope.searchTerm});
        console.log($scope.iTunesResult);
    };
    
    $scope.searchTerm = "jackson";
    $scope.doSearch();
})

