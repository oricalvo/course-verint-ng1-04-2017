class ContactEx extends Contact {
    website;

    constructor(name, email, website) {
        super(name, email);

        this.website = website;
    }

    dump() {
        super.dump();

        console.log(this.website);
    }
}
