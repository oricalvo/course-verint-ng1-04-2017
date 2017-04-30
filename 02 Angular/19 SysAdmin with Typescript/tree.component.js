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
appModule.component("myTree", {
    controller: TreeCtrl,
    templateUrl: "tree.component.html",
});
//# sourceMappingURL=tree.component.js.map