var SysAdminService = (function () {
    function SysAdminService() {
        this.folders = [
            { id: 1, name: "Products", items: [1, 2, 3], isSelected: false },
            { id: 2, name: "Customers", items: [4, 5, 6], isSelected: false },
            { id: 3, name: "users", items: [7, 8, 9], isSelected: false },
        ];
        this.selectedFolder = null;
    }
    SysAdminService.prototype.select = function (folder) {
        if (this.selectedFolder) {
            this.selectedFolder.isSelected = false;
            this.selectedFolder = null;
        }
        this.selectedFolder = folder;
        this.selectedFolder.isSelected = true;
    };
    return SysAdminService;
}());
appModule.service("sysAdminService", SysAdminService);
//# sourceMappingURL=sysAdmin.service.js.map