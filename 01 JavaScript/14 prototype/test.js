var Point = (function() {

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype.dump = function () {
        console.log(this.x + ", " + this.y);
    }

    return Point;
})();

var pt1 = new Point(5, 10);
var pt2 = new Point(10, 20);

console.log(pt1 == pt2);
console.log(pt1.dump == pt2.dump);