var appModule = angular.module("myApp", ["ngSanitize"]);

function HomeCtrl($scope) {
    $scope.birthday = new Date();
}

appModule.filter("time", function() {
    return function(val) {
        return val.getHours() + ":" + val.getMinutes();
    }
});

appModule.controller("HomeCtrl", HomeCtrl);

