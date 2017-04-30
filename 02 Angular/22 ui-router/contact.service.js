class ContactService {
    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"}
        ];
    }

    getById(id) {
        return this.contacts.find(c => c.id == id);
    }
}

appModule.service("contactService", ContactService);

