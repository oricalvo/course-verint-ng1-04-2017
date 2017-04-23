var appModule = angular.module("myApp", []);

function HomeCtrl($scope) {
    $scope.name = "Ori";
}

appModule.controller("HomeCtrl", HomeCtrl);

