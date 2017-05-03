class AppCtrl {
    constructor(contactService) {
        this.contactService = contactService;
    }

    get contacts() {
        return this.contactService.contacts;
    }
}

appModule.component("myApp", {
    controller: AppCtrl,
    templateUrl: "app.component.html",
});
