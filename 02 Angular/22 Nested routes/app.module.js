var appModule = angular.module("myApp", ["ui.router"]);

appModule.config(function($stateProvider) {
    $stateProvider.state({
        name: "home",
        url: "/home",
        template: "<my-home></my-home>",
    });

    $stateProvider.state({
        name: "home.list",
        url: "/contact",
        template: "<my-contact-list></my-contact-list>",
    });

    $stateProvider.state({
        name: "admin",
        url: "/admin",
        template: "<my-admin></my-admin>",
    });

    $stateProvider.state({
        name: "contactDetails",
        url: "/contact/:id",
        template: "<my-contact-details></my-contact-details>",
    });
});

