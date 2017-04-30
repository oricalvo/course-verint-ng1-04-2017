class TreeCtrl {
    constructor(private sysAdminService: SysAdminService) {
        console.log("TreeCtrl ctor");
    }

    get folders() {
        return this.sysAdminService.folders;
    }

    select(folder) {
        this.sysAdminService.select(folder);
    }
}

appModule.component("myTree", {
    controller: TreeCtrl,
    templateUrl: "tree.component.html",
});
