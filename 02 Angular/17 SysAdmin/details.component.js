class DetailsCtrl {
    constructor() {
        console.log("DetailsCtrl ctor");
    }
}

appModule.component("myDetails", {
    controller: DetailsCtrl,
    templateUrl: "details.component.html",
});
