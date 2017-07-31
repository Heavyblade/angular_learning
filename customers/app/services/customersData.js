(function(){

  var customersData = function($http) {
                        return({ getCustomers: function() {
                                                  return $http.get("http://localhost:4000/customers?format=json");
                                               },
                                 getCustomer: function(customerId) {
                                                  return $http.get("http://localhost:4000/customers/" + customerId + "?format=json");
                                               }
                        });
  };

  customersData.$inject = ["$http"];

  angular.module("customersApp").factory("customersData", customersData);

})();
