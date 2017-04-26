class TreeCtrl {
    constructor(sysAdminService) {
        console.log("TreeCtrl ctor");

        this.sysAdminService = sysAdminService;
        this.folders = sysAdminService.folders;
    }

    select(folder) {
        this.sysAdminService.select(folder);
    }
}

appModule.component("myTree", {
    controller: TreeCtrl,
    templateUrl: "tree.component.html",
});
