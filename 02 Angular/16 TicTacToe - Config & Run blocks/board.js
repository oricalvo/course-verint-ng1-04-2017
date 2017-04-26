class Board {
    constructor() {
        this.reset();
    }

    reset() {
        this.current = "X";
        this.rows = [];

        for(var y=0; y<3; y++) {
            this.rows[y] = [];

            for(var x=0; x<3; x++) {
                this.rows[y][x] = {
                    x: x,
                    y: y,
                    value: ""
                }
            }
        }
    }

    toggle() {
        this.current = (this.current == "X" ? "0" : "X");
    }
}

//appModule.service("board", Board);

appModule.provider("board", {
    $get: function() {
        return new Board(this.firstPlayer);
    },
    changeFirstPlayer: function(player) {
        this.firstPlayer = player;
    },
});

// var board = new Board();
