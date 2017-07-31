(function() {

  var CustomersController = function($scope, customersData) {
      $scope.sortBy = 'name';
      $scope.reverse = false;
      $scope.customers = [];

       customersData.getCustomers()
         .then(function(data) {
            $scope.customers = data.data;
         }, function() {
           console.log("error");
         });

      $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
      };
  };

  CustomersController.$inject = ['$scope', "customersData"];

  angular.module('customersApp').controller('CustomersController', CustomersController);

}());
