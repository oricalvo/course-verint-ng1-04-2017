var appModule = angular.module("myApp", ["ngSanitize"]);

function HomeCtrl($scope) {
    $scope.showAdmin = false;

    $scope.toggle = function() {
        $scope.showAdmin = !$scope.showAdmin;
    }

    $scope.counter = 123;

    $scope.remove = function() {
        console.log("remove");
    }
}

appModule.controller("HomeCtrl", HomeCtrl);

