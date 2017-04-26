var appModule = angular.module("myApp", ["ngSanitize"]);

function HomeCtrl($scope) {
    $scope.counter = 0;

    $scope.inc = function() {
        ++$scope.counter;
    }
}

function Home2Ctrl() {
    this.counter = 0;
}

Home2Ctrl.prototype.inc = function() {
    ++this.counter;
}

appModule.controller("HomeCtrl", HomeCtrl);
appModule.controller("Home2Ctrl", Home2Ctrl);

appModule.component("home", {
    controller: Home2Ctrl,
    templateUrl: "HomeCtrl.html",
});
