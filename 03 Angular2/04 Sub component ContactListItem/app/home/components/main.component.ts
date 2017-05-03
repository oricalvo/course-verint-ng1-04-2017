import {Component, SystemJsNgModuleLoader, Compiler} from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Component({
  selector: "my-home-main",
  moduleId: module.id,
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent {
  name: string;
  contacts: Contact[];
  nextId: number;

  constructor(private http: Http) {
    this.nextId = -1;
  }

  ngOnInit() {
    setTimeout(() => {
      this.refresh();
    }, 1000);
  }

  add() {
    if(!this.name) {
      return;
    }

    const contact = {id:this.nextId--, name: this.name};

    const contacts = this.contacts.concat([contact]);

    //this.contacts.push(contact);

    contacts.sort((c1, c2)=> {
      if(c1.name < c2.name) {
        return -1;
      }
      if(c1.name == c2.name) {
        return 0;
      }
      else {
        return 1;
      }
    });

    this.contacts = contacts;
  }

  refresh() {
    this.contacts = [
      {id:1, name: "Ori"},
      {id:2, name: "aRoni"}
    ]
  }

  trackByFn(index: number, contact: Contact) {
    return index;
  }

  onContactDelete(contact) {
    console.log("onContactDelete", contact);

    const index = this.contacts.findIndex(c => c==contact);
    if(index != -1) {
      this.contacts.splice(index, 1);
    }
  }
}

interface Contact {
  id: number;
  name: string;
}