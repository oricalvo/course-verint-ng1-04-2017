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

var board = new Board();
