class AppCtrl {
    constructor($rootScope, board) {
        console.log("AppCtrl ctor");

        this.board = board;
    }

    new() {
        this.board.reset();
    }
}

appModule.component("myApp", {
    controller: ["$rootScope", "board", AppCtrl],
    templateUrl: "app.component.html",
});
