class HomeCtrl {
    constructor($state, contactService) {
        this.$state = $state;
        this.contactService = contactService;

        this.contacts = this.contactService.contacts;
    }
}

HomeCtrl.prototype.select = function(contact) {
    this.$state.go("contactDetails", {id: contact.id});
}

appModule.component("myHome", {
    controller: HomeCtrl,
    templateUrl: "home.component.html",
});
