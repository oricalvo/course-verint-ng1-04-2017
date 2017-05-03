import {Component, SystemJsNgModuleLoader, Compiler, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Component({
  selector: "my-contact-list-item",
  moduleId: module.id,
  templateUrl: "./contactListItem.component.html",
  styleUrls: ["./contactListItem.component.css"]
})
export class ContactListItemComponent {
  @Input() contact: Contact;

  @Output() onDelete: EventEmitter<Contact>;

  constructor() {
    this.onDelete = new EventEmitter<Contact>();
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  remove() {
    this.onDelete.emit(this.contact);
  }
}

export interface Contact {
  id: number;
  name: string;
}