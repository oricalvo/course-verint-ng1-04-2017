class Contact {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    dump() {
        console.log(this.name + ", " + this.email);
    }
}
