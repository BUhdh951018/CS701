angular.module('app', ['myDirectives'])
 .controller('AlertController', function ($scope) {
    $scope.alerts = [
      { type: 'error',   msg: 'Error alert!' }, 
      { type: 'success', msg: 'Success alert!'}
    ];

    $scope.alertType = 'error';
    $scope.alertText = '';
  
    $scope.addAlert = function() {
      if ($scope.alertText.trim() != '') {
        $scope.alerts.push(
          {type:$scope.alertType,
            msg:$scope.alertText 
          });
        console.log($scope.alerts);
        $scope.alertText = '';
      }
    };
  
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
});

