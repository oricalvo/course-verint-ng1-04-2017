"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../app.module");
var TreeCtrl = (function () {
    function TreeCtrl(sysAdminService) {
        this.sysAdminService = sysAdminService;
        console.log("TreeCtrl ctor");
    }
    Object.defineProperty(TreeCtrl.prototype, "folders", {
        get: function () {
            return this.sysAdminService.folders;
        },
        enumerable: true,
        configurable: true
    });
    TreeCtrl.prototype.select = function (folder) {
        this.sysAdminService.select(folder);
    };
    return TreeCtrl;
}());
exports.TreeCtrl = TreeCtrl;
app_module_1.component("myTree", {
    controller: ["sysAdminService", TreeCtrl],
    template: require("./tree.component.html"),
    styles: require("./tree.component.css"),
});
//# sourceMappingURL=tree.component.js.map