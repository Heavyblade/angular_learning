(function(){

    var OrdersController = function($scope, $routeParams, customersData) {
        $scope.orderId   = $routeParams.orderId;
        $scope.orders    = [];

        customersData.getCustomer($routeParams.orderId)
        .then(function(customer) {
            $scope.orders = customer.data.orders;
        }, function() {
            console.log("error");
        });
    };

    OrdersController.inject = ["$scope", "$routeParams", "customersData"];
    angular.module("customersApp").controller("OrdersController", OrdersController);
})();
