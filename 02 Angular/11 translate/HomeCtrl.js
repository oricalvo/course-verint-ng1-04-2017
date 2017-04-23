var appModule = angular.module("myApp", ["ngSanitize"]);

var translation = null;

function HomeCtrl($scope, $http) {
    $scope.birthday = new Date();

    // $http.get("en.json").then(function(response) {
    //     console.log("Translation is ready");
    //     translation = response.data;
    // });

    $scope.changeLang = function() {
        loadLang("he").then(function() {
            $scope.$apply();
        });
    }
}

appModule.filter("time", function() {
    return function(val) {
        return val.getHours() + ":" + val.getMinutes();
    }
});

appModule.filter("translate", function($http) {
    translateFilter.$stateful = true;
    function translateFilter(key) {
        console.log("translate is running");
        return translation[key];
    }

    return translateFilter;
});

appModule.controller("HomeCtrl", HomeCtrl);

function loadLang(lang) {
    return $.ajax({
        type: "GET",
        url: lang + ".json",
        success: function (json) {
            console.log("Translation was loaded", json);
            translation = json;
        },
        error: function () {
        }
    });
}

loadLang("en").then(function() {
    angular.bootstrap(document.querySelector("html"), [appModule.name]);
});



