const appModule = angular.module("myApp", []);

class HomeController {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"}
        ];
    }

    deleteContact(contact, index) {
        if(confirm("Delete contact " + contact.name + "?")) {
            this.contacts.splice(index, 1);
        }
    }
}

appModule.component("myHome", {
    controller: HomeController,
    templateUrl: "home.component.html"
});
