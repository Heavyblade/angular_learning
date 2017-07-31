(function() {

  var app = angular.module('customersApp', ['ngRoute','ngAnimate']);

  app.config(function($routeProvider, $httpProvider){
    $routeProvider
      .when("/", {
            controller: "CustomersController",
            templateUrl: "app/views/customers.html"
      })
      .when("/orders/:orderId", {
            controller: "OrdersController",
            templateUrl: "app/views/orders.html"
      })
      .otherwise({redirectTo: "/"});

      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

}());
