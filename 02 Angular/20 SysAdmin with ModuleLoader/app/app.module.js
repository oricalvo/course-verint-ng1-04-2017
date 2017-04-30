"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
exports.appModule = angular.module("myApp", []);
function component(name, options) {
    exports.appModule.component(name, options);
}
exports.component = component;
//# sourceMappingURL=app.module.js.map