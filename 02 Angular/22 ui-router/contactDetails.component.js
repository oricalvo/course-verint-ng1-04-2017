class ContactDetailsCtrl {
    constructor($stateParams, contactService) {
        const contactId = $stateParams.id;
        if (!contactId) {
            throw new Error("contact id is missing");
        }

        this.contact = contactService.getById(contactId);
    }
}

appModule.component("myContactDetails", {
    controller: ContactDetailsCtrl,
    templateUrl: "contactDetails.component.html",
});
