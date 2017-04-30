import {appModule, component} from "../app.module";

export class DetailsCtrl {
    constructor() {
        console.log("DetailsCtrl ctor");
    }
}

component("myDetails", {
    controller: [DetailsCtrl],
    template: require("./details.component.html"),
    styles: require("./details.component.css"),
});
