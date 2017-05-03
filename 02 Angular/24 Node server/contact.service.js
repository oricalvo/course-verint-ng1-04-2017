class ContactService {
    constructor($http, $q) {
        this.contacts = null;
        this.$http = $http;
        this.$q = $q;
    }

    loadAll() {
        return this.$q.when().then(()=> {
            if (this.contacts) {
                return this.contacts;
            }

            return this.$http.get("api/contact").then(response => {
                return this.contacts = response.data;
            });
        });
    }
}

appModule.service("contactService", ContactService);

