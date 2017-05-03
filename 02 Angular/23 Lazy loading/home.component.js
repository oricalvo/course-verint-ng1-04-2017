class HomeCtrl {
    constructor($state) {
        this.$state = $state;
    }
}

appModule.component("myHome", {
    controller: HomeCtrl,
    templateUrl: "home.component.html",
});
