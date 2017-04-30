import * as angular from "angular";

export var appModule = angular.module("myApp", []);

export interface ComponentOptions {
    controller: any;
    template: string;
    styles: string;
}

export function component(name, options: ComponentOptions) {
    appModule.component(name, options);
}

