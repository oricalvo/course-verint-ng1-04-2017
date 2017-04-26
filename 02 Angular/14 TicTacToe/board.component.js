class BoardCtrl {
    constructor() {
        this.board = board;
    }

    cellClicked(cell) {
        console.log(cell.x + ", " + cell.y);

        cell.value = this.board.current;
        this.board.toggle();
    }
}

appModule.component("myBoard", {
    controller: BoardCtrl,
    templateUrl: "board.component.html",
});
