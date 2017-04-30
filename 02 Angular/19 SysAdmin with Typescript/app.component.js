var AppCtrl = (function () {
    function AppCtrl($rootScope) {
        console.log("AppCtrl ctor");
    }
    return AppCtrl;
}());
appModule.component("myApp", {
    controller: AppCtrl,
    templateUrl: "app.component.html",
});
//# sourceMappingURL=app.component.js.map