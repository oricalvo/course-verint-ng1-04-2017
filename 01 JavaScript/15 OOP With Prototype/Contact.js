var Contact = (function() {
    //var nextId = 1000;

    Contact.nextId = 1000;

    function Contact(name, email) {
        this.id = ++Contact.nextId;
        this.name = name;
        this.email = email;
    }

    Contact.prototype.dump = function () {
        console.log(this.id + ": " + this.name + ", " + this.email);
    }

    return Contact;
})();
