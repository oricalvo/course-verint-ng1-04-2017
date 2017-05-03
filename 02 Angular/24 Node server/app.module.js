var appModule = angular.module("myApp", []);

appModule.run(function(contactService) {
    contactService.loadAll();
});
