var appModule = angular.module("myApp", ["ngSanitize"]);

function HomeCtrl($scope) {
    $scope.name = "<script>alert('XXX');</script>";

    $scope.name = "XXX";

    $scope.name = "<h1>Hello</h1>";
}

appModule.controller("HomeCtrl", HomeCtrl);

