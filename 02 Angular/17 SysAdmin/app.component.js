class AppCtrl {
    constructor($rootScope) {
        console.log("AppCtrl ctor");
    }
}

appModule.component("myApp", {
    controller: AppCtrl,
    templateUrl: "app.component.html",
});
