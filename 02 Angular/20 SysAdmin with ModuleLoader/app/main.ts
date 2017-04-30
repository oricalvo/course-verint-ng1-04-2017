import * as angular from "angular";
import {appModule} from "./app.module";
import {SysAdminService} from "./services/sysAdmin.service";
import {AppCtrl} from "./components/app.component";
import {ListCtrl} from "./components/list.component";
import {TreeCtrl} from "./components/tree.component";
import {DetailsCtrl} from "./components/details.component";
import {ClockComponent} from "./components/clock.component";

const services = [
    SysAdminService
];

const components = [
    AppCtrl,
    ListCtrl,
    TreeCtrl,
    DetailsCtrl,
    ClockComponent,
];

angular.bootstrap(document.querySelector("html"), [appModule.name]);
