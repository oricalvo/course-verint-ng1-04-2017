class AppCtrl {
    constructor($compile, $scope, $element) {
        this.$compile = $compile;
        this.$scope = $scope;
        this.$element = $element;

        this.template = "<span>{{$ctrl.counter}}</span>";
        this.counter = 123;
    }

    compile() {
        console.log(this.template);

        var dom = angular.element(this.template);
        console.log(dom);

        const linkFn = this.$compile(dom);
        linkFn(this.$scope);

        this.$element.find(".marker").append(dom);
    }
}

appModule.component("myApp", {
    controller: AppCtrl,
    templateUrl: "app.component.html",
});
