var Contact = (function () {
    function Contact(name, email) {
        this.name = name;
        this.email = email;
    }
    Contact.prototype.dump = function () {
        console.log(this.name + ", " + this.email + "XXX");
    };
    return Contact;
}());
//# sourceMappingURL=Contact.js.map