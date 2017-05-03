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

  constructor(private http: Http) {
    this.contacts = [];
  }

  add() {
    if(!this.name) {
      return;
    }

    const contact = {id:-1, name: this.name};

    this.contacts.push(contact);

    this.contacts.sort((c1, c2)=> {
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
  }
}

interface Contact {
  id: number;
  name: string;
}