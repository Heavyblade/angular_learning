(function(){

  angular.module("customersApp").directive("isolatedDirective", function() {
    return({scope: {name: '@'},
            template: "Hola {{name}}"
    });
  });

})();
