class SysAdminService {
    constructor() {
        this.folders = [
            {id:1, name: "Products", items: [1,2,3]},
            {id:2, name: "Customers", items: [4,5,6]},
            {id:3, name: "users", items: [7,8,9]},
        ];

        this.selectedFolder = null;
    }

    select(folder) {
        if(this.selectedFolder) {
            this.selectedFolder.isSelected = false;
            this.selectedFolder = null;
        }

        this.selectedFolder = folder;

        this.selectedFolder.isSelected = true;
    }
}

appModule.service("sysAdminService", SysAdminService);
