class AppCtrl {
    constructor($rootScope) {
    }

    new() {
        board.reset();
    }
}

appModule.component("myApp", {
    controller: ["$rootScope", AppCtrl],
    templateUrl: "app.component.html",
});
