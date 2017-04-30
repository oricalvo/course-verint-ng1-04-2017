var appModule = angular.module("myApp", []);

function HomeCtrl($scope, $http) {
    $http.get("contacts.json").then(function(response) {
        $scope.contacts = response.data;
    });

    $scope.remove = function(contact, index) {
        //var index = $scope.contacts.indexOf(contact);
        //if(index != -1) {
            $scope.contacts.splice(index, 1);
        //}

        //console.log("Delete ", contact);
    }
}

appModule.controller("HomeCtrl", HomeCtrl);

