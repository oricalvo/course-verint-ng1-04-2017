class ListCtrl {
    constructor(sysAdminService) {
        console.log("ListCtrl ctor");

        this.sysAdminService = sysAdminService;
    }

    get items() {
        if(!this.sysAdminService.selectedFolder) {
            return [];
        }

        return this.sysAdminService.selectedFolder.items;
    }
}

appModule.component("myList", {
    controller: ListCtrl,
    templateUrl: "list.component.html",
});
