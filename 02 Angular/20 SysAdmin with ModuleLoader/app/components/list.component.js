"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../app.module");
var ListCtrl = (function () {
    function ListCtrl(sysAdminService) {
        this.sysAdminService = sysAdminService;
        console.log("ListCtrl ctor");
    }
    Object.defineProperty(ListCtrl.prototype, "items", {
        get: function () {
            if (!this.sysAdminService.selectedFolder) {
                return [];
            }
            return this.sysAdminService.selectedFolder.items;
        },
        enumerable: true,
        configurable: true
    });
    return ListCtrl;
}());
exports.ListCtrl = ListCtrl;
app_module_1.component("myList", {
    controller: ["sysAdminService", ListCtrl],
    template: require("./list.component.html"),
    styles: require("./list.component.css"),
});
//# sourceMappingURL=list.component.js.map