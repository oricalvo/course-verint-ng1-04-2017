class ContactEx extends Contact {
    constructor(name, email, website) {
        super(name, email);

        this.website = website;
    }

    dump() {
        super.dump();

        console.log(this.website);
    }
}
