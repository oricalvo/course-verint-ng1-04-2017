var appModule = angular.module("myApp", []);

function HomeCtrl($scope) {
    $scope.sayHello = function() {
        alert("Hello " + $scope.name);
    }
}

appModule.controller("HomeCtrl", HomeCtrl);

