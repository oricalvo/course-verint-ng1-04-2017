import {appModule, component} from "../app.module";

export class AppCtrl {
    constructor() {
        console.log("AppCtrl ctor");
    }
}

component("myApp", {
    controller: [AppCtrl],
    template: require("./app.component.html"),
    styles: require("./app.component.css"),
});
