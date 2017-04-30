"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../app.module");
var AppCtrl = (function () {
    function AppCtrl() {
        console.log("AppCtrl ctor");
    }
    return AppCtrl;
}());
exports.AppCtrl = AppCtrl;
app_module_1.component("myApp", {
    controller: [AppCtrl],
    template: require("./app.component.html"),
    styles: require("./app.component.css"),
});
//# sourceMappingURL=app.component.js.map