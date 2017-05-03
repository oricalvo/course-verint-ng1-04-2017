import {Component} from '@angular/core';
import {Contact, ContactService} from "./contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  contacts: Contact[];

  constructor(contactService: ContactService) {
    //this.contacts = contactService.contacts;

    contactService.loadAll().then(contacts => {
      this.contacts = contacts;
    });
  }

  add() {
    console.log("add");

    this.contacts.push({id:-1, name: this.name});
  }
}
