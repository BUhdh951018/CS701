var myModule = angular.module('shoppingCart', []);

myModule.controller('CartController', function CartController($scope) {
    if (localStorage.He_cart) {
        $scope.books = JSON.parse(localStorage.getItem("He_cart"));
    } else{
        $scope.books = [
            {
                title: "Absolute Java",
                qty: 1,
                price: 114.95
            },
            {
                title: "Pro HTML5",
                qty: 2,
                price: 27.95
            },
            {
                title: "Head First HTML5",
                qty: 1,
                price: 27.89
            }
        ];
    }
    
    $scope.getTotalPrice = function() {
        var totalPrice = 0;

        for(var i=0; i<$scope.books.length; i++) {
            totalPrice += $scope.books[i].price * $scope.books[i].qty;
        }

        totalPrice = totalPrice.toFixed(2);
        $scope.books.totalPrice = totalPrice;
        return totalPrice
    }

    $scope.books.totalPrice = $scope.getTotalPrice();

    $scope.addBook = function() {
        $scope.books.push({
            title: "New Book",
            qty: 1,
            price: 10.99
        });
        $scope.getTotalPrice();
    }

    $scope.removeBook = function(index) {
        $scope.books.splice(index, 1);
        $scope.getTotalPrice();
    }

    $scope.saveBook = function() {
        localStorage.setItem("He_cart", JSON.stringify($scope.books));
    }
});