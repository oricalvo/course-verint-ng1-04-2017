class AppComponent {
    constructor($compile, $scope, $element) {
        this.$compile = $compile;
        this.counter = 0;
        this.$scope = $scope;
        this.$element = $element;
    }

    inc() {
        this.counter++;
    }

    load() {
        var text = "<h1>{{$ctrl.counter}}</h1>";
        var jq = angular.element(text);
        console.log(jq[0].outerHTML);

        console.log("compile");
        var linkFn = this.$compile(jq);
        console.log(jq[0].outerHTML);

        console.log("link");
        linkFn(this.$scope);
        console.log(jq[0].outerHTML);

        this.$element.append(jq);
    }
}

appModule.component("myApp", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
