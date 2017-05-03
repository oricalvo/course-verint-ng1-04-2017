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
  constructor(private http: Http) {
  }

  async ngOnInit() {
    const response = await this.http.get("/data/contacts.json").toPromise();
    console.log(response.json());
  }
}
