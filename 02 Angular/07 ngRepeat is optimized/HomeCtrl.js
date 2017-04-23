var appModule = angular.module("myApp", ["ngSanitize"]);

function HomeCtrl($scope, $element, $http) {
    var before;
    var after;
    var firstTime = true;

    refresh();

    function refresh() {
        $http.get("contacts.json").then(function(response) {
            $scope.contacts = response.data;

            if(firstTime) {
                setTimeout(function () {
                    before = takeDOM();
                    console.log(before);
                }, 0);

                firstTime = false;
            }
        });
    }

    $scope.refresh = function() {
        refresh();
    }

    $scope.switch = function() {
        //var tmp = $scope.contacts[0];
        //$scope.contacts[0] = $scope.contacts[1];
        //$scope.contacts[1] = tmp;

        //$scope.contacts[0] = {id:2, name: "Roni"};

        // $scope.contacts[0].name = "XXX";
        // $scope.contacts[0].name = "Ori";
    }

    $scope.takeDOM = function() {
        after = takeDOM();
        console.log(after);
    }

    $scope.compareDOM = function() {
        console.log(before[0] == after[0]);
    }

    $scope.dump = function() {
        console.log($scope.contacts);
    }

    function takeDOM() {
        var lis = $element.find("li");
        return lis;
    }
}

appModule.controller("HomeCtrl", HomeCtrl);

