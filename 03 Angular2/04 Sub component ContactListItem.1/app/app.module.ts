import {
    NgModule, NgModuleFactoryLoader, APP_INITIALIZER
}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './layout/app.component';
import {ClockComponent} from "./components/clock.component";
import {FormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import {ModuleLoader} from "./common/moduleLoader";
import {appRoutes} from "./routes";
import {MainComponent} from "./home/components/main.component";
import {AppState, RootService} from "./services/root.service";
import {ProductService} from "./services/product.service";
import {AppStore} from "t-rex";
import {initAppStore} from "./appStore";
import {HttpModule} from "@angular/http";
import {ContactListItemComponent} from "./home/components/contactListItem.component";
import {ContactListComponent} from "./home/components/contactList.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        HttpModule,
    ],
    declarations: [
        AppComponent,
        ClockComponent,
        MainComponent,
        ContactListComponent,
        ContactListItemComponent,
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: ModuleLoader },
        RootService,
        ProductService,
    ]
})
export class AppModule {
    constructor(rootService: RootService, productService: ProductService) {
        initAppStore(rootService, productService);
    }
}
