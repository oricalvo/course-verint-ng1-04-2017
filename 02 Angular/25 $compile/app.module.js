var appModule = angular.module("myApp", []);

appModule.run(function($compile, $rootScope) {
    setTimeout(function() {
        var text = "<h1>Hello {{title}}</h1>";

        var jq = angular.element(text);
        console.log(jq[0].outerHTML);

        console.log("compile");
        var linkFn = $compile(jq);
        console.log(jq[0].outerHTML);

        console.log("link");
        linkFn($rootScope);
        console.log(jq[0].outerHTML);

        console.log("dirty checking");
        $rootScope.title = "XXX";
        $rootScope.$apply();
        console.log(jq[0].outerHTML);

        //console.log(dom);
    }, 0);
});
