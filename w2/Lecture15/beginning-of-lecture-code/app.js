(function () {
  "use strict";

  angular
    .module("CounterApp", [])
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope", "$timeout"];
  function CounterController($scope, $timeout) {
    $scope.counter = 0;

    $scope.upCounter = function () {
      $timeout(function () {
        $scope.counter++;
        console.log("Counter incremented!");
      }, 2000);
    }; // find Angular specific service that handles the same function, eg, $timeout in this case

    // digest cycle does not get triggered automatically if events are unaware of Angular

    // wrap your custom code inside of $apply
    // $scope.upCounter = function () {
    //   setTimeout(function () {
    //     $scope.$apply(function () {
    //       $scope.counter++;
    //       console.log("Counter incremented");
    //     });
    //   }, 2000);
    // };

    // call $digest after your custom code
    // $scope.upCounter = function () {
    //   setTimeout(function () {
    //     $scope.counter++;
    //     console.log("Counter incremented");
    //     $scope.$digest();
    //   }, 2000);
    // };
  }
})();
