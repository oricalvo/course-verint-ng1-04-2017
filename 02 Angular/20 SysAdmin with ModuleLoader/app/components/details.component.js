"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../app.module");
var DetailsCtrl = (function () {
    function DetailsCtrl() {
        console.log("DetailsCtrl ctor");
    }
    return DetailsCtrl;
}());
exports.DetailsCtrl = DetailsCtrl;
app_module_1.component("myDetails", {
    controller: [DetailsCtrl],
    template: require("./details.component.html"),
    styles: require("./details.component.css"),
});
//# sourceMappingURL=details.component.js.map