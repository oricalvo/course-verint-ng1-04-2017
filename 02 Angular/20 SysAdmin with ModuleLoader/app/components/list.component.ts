import {appModule, component} from "../app.module";
export class ListCtrl {
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

component("myList", {
    controller: ["sysAdminService", ListCtrl],
    template: require("./list.component.html"),
    styles: require("./list.component.css"),
});
