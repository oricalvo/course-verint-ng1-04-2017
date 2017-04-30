var DetailsCtrl = (function () {
    function DetailsCtrl() {
        console.log("DetailsCtrl ctor");
    }
    return DetailsCtrl;
}());
appModule.component("myDetails", {
    controller: DetailsCtrl,
    templateUrl: "details.component.html",
});
//# sourceMappingURL=details.component.js.map