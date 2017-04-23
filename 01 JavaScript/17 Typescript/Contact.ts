class Contact {
    name2: string;
    email: string;

    constructor(name: string, email: string) {
        this.name2 = name;
        this.email = email;
    }

    dump() {
        console.log(this.name2 + ", " + this.email + "XXX");
    }
}
