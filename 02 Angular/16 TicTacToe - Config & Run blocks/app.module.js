var appModule = angular.module("myApp", []);

appModule.config(function(boardProvider) {
    console.log("Configuring services");

    boardProvider.firstPlayer("0");
});

appModule.run(function(board) {
    console.log("Initializing services");

    //board.firstPlayer("0");
});
