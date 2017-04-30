import {SysAdminService} from "../services/sysAdmin.service";
import {appModule, component} from "../app.module";

export class TreeCtrl {
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

component("myTree", {
    controller: ["sysAdminService", TreeCtrl],
    template: require("./tree.component.html"),
    styles: require("./tree.component.css"),
});
