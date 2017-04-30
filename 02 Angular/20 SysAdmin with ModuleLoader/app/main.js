"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var app_module_1 = require("./app.module");
var sysAdmin_service_1 = require("./services/sysAdmin.service");
var app_component_1 = require("./components/app.component");
var list_component_1 = require("./components/list.component");
var tree_component_1 = require("./components/tree.component");
var details_component_1 = require("./components/details.component");
var clock_component_1 = require("./components/clock.component");
var services = [
    sysAdmin_service_1.SysAdminService
];
var components = [
    app_component_1.AppCtrl,
    list_component_1.ListCtrl,
    tree_component_1.TreeCtrl,
    details_component_1.DetailsCtrl,
    clock_component_1.ClockComponent,
];
angular.bootstrap(document.querySelector("html"), [app_module_1.appModule.name]);
//# sourceMappingURL=main.js.map