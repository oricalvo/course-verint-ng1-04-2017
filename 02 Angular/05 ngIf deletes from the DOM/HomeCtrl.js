var appModule = angular.module("myApp", ["ngSanitize"]);

function HomeCtrl($scope) {
    var me = this;
    $scope.showMessage = true;

    this.name = "xxx";

    $scope.toggleMessage = function() {
        $scope.showMessage = !$scope.showMessage;
    }

    $scope.dump = function() {
        console.log(me.name);
    }
}

appModule.controller("HomeCtrl", HomeCtrl);

