function ContactEx(name, email, website) {
    Contact.call(this, name, email);

    this.website = website;
}

ContactEx.prototype = Object.create(Contact.prototype);

ContactEx.prototype.dump = function() {
    //console.log(this.name + ", " + this.email + ", " + this.website);

    Contact.prototype.dump.call(this);

    console.log(this.website);
}
