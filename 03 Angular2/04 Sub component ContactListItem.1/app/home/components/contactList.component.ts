import {Component, SystemJsNgModuleLoader, Compiler, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Contact} from "./contactListItem.component";

@Component({
  selector: "my-contact-list",
  moduleId: module.id,
  templateUrl: "./contactList.component.html",
  styleUrls: ["./contactList.component.css"]
})
export class ContactListComponent {
  @Input() contacts: Contact[];
  count: number;

  constructor() {
  }

  ngOnInit() {
    console.log("ngOnInit", this.contacts);

    this.calcCount();
  }

  ngOnChanges() {
    console.log("ngOnChanges", this.contacts);

    this.calcCount();
  }

  calcCount() {
    this.count = 0;

    if(this.contacts) {
      for (let contact of this.contacts) {
        if (contact.name.startsWith("a")) {
          ++this.count;
        }
      }
    }
  }
}
