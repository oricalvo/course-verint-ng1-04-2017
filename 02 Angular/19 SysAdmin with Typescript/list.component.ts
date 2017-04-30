class ListCtrl {
    constructor(private sysAdminService) {
        console.log("ListCtrl ctor");
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
