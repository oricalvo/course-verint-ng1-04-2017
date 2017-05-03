var appModule = angular.module("myApp", []);

appModule.config(function($provide) {
    $provide.value("di", $provide);
});
