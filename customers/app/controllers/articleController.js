(function () {

  var ArticleController = function($scope) {
        $scope.title = "Hola Mundo";
  };

  ArticleController.$inject = ["$scope"];

  angular.module("customersApp").controller("ArticleController", ArticleController);
})();
