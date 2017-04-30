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
appModule.component("myList", {
    controller: ListCtrl,
    templateUrl: "list.component.html",
});
//# sourceMappingURL=list.component.js.map