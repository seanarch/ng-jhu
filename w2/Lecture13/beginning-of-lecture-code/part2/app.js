(function () {
  "use strict";

  angular
    .module("MsgApp", [])
    .controller("MsgController", MsgController)
    .filter("loves", LovesFilter) // add filter
    .filter("truth", TruthFilter); // add another filter

  MsgController.$inject = ["$scope", "lovesFilter"]; // inject lovesFilter
  function MsgController($scope, lovesFilter) {
    // add lovesFilter
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function () {
      var msg = "Yaakov likes to eat healthy snacks at night!";
      return msg;
    };

    // add new function and apply lovesFilter
    $scope.sayLovesMessage = function () {
      var msg = "Yaakov likes to eat healthy snacks at night!";
      msg = lovesFilter(msg);
      return msg;
    };

    $scope.feedYaakov = function () {
      $scope.stateOfBeing = "fed";
    };
  }

  // lovesfilter
  function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    };
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }
})();
