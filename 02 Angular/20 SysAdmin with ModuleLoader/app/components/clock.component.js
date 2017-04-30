"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../app.module");
var ClockComponent = (function () {
    function ClockComponent($interval) {
        var _this = this;
        console.log("Clock ctor");
        this.time = new Date();
        $interval(function () {
            _this.time = new Date();
        }, 1000);
    }
    return ClockComponent;
}());
exports.ClockComponent = ClockComponent;
app_module_1.component("myClock", {
    controller: ["$interval", ClockComponent],
    template: require("./clock.component.html"),
    styles: require("./clock.component.css"),
});
//# sourceMappingURL=clock.component.js.map