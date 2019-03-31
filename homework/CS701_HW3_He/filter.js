angular.module('filter', [])
    .controller('FilterController', function($scope) {})
    .filter("tokenize", function() {
        return function(input, delimiter) {
            if (angular.isString(input)) {
                result = "";
                for (var i=0; i<input.length-1; i++) {
                    result += input[i];
                    if (delimiter == undefined) {
                        result += ",";
                    }else{
                        result += delimiter;
                    }
                }
                result += input[input.length-1];

                return result;
            }
        }
    });