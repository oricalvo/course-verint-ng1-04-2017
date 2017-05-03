var appModule = angular.module("myApp", ["ui.router"]);

appModule.config(function($stateProvider) {
    $stateProvider.state({
        name: "home",
        url: "/home",
        template: "<my-home></my-home>",
    });

    $stateProvider.state({
        name: "about",
        url: "/about",
        template: "<my-about></my-about>",
        resolve: {
            blabla: function ($q) {

                var deferred = $q.defer();

                setTimeout(function() {
                    deferred.resolve();
                }, 5000);

                return deferred.promise;
            }
        }
    });

    $stateProvider.state({
        name: "contactDetails",
        url: "/contact/:id",
        template: "<my-contact-details></my-contact-details>",
    });
});

