var appModule = angular.module("myApp", ["ngSanitize"]);

function HomeCtrl($scope, $element, $http) {
    $scope.counter = 0;

    $scope.inc = function() {
        ++$scope.counter;

        //$scope.$apply();

        $scope.$$postDigest(function() {
            console.log("counter", $element.find("span").text());
        });
    }
}

appModule.controller("HomeCtrl", HomeCtrl);

