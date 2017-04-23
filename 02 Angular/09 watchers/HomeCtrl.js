var appModule = angular.module("myApp", ["ngSanitize"]);

function HomeCtrl($scope, $element, $http, $rootScope, $interval) {
    $scope.contacts = [
        {"id": 1, "name": "OriX"},
        {"id": 2, "name": "RoniX"},
        {"id": 3, "name": "UdiX"}
    ];

    setTimeout(function() {
        walk($rootScope);
    }, 0);

    $interval(function() {
        $scope.contacts.splice(0, 1);

        //$rootScope.$apply();
    }, 1000);
}

function walk(scope) {
    console.log(scope);

    for(var child=scope.$$childHead; child!=null; child=child.$$nextSibling) {
        walk(child);
    }
}

appModule.controller("HomeCtrl", HomeCtrl);

