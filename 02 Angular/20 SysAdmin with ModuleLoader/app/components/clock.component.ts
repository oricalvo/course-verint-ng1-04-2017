import {component} from "../app.module";
export class ClockComponent {
    time: Date;

    constructor($interval) {
        console.log("Clock ctor");

        this.time = new Date();

        $interval(()=> {
            this.time = new Date();
        }, 1000);
    }
}

component("myClock", {
    controller: ["$interval", ClockComponent],
    template: require("./clock.component.html"),
    styles: require("./clock.component.css"),
});
