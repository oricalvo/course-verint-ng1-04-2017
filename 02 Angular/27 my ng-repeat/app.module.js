var appModule = angular.module("myApp", []);

appModule.run(function($compile, $rootScope) {
    setTimeout(function() {

        //console.log(dom);
    }, 0);
});

appModule.directive("myRepeat", function($compile) {
    return {
        terminal: true,
        compile: function(element, attrs) {

            var marker = $("<!-- marker -->");
            marker.insertBefore(element);
            element.removeAttr("my-repeat");
            element.remove();

            var linkFn = $compile(element);
            var fieldName = attrs.myRepeat;

            console.log("Array name: " + fieldName);

            return function link(scope) {
                console.log("link");

                scope.$watch(function() {
                    return scope[fieldName];
                }, function(arr) {
                    if(arr) {
                        for(var i=0; i<arr.length; i++) {
                            var itemScope = scope.$new();
                            itemScope.num = arr[i];
                            var clone = linkFn(itemScope, function() {
                            });

                            clone.insertBefore(marker);

                            console.log(arr[i]);
                        }
                    }
                });
            }
        }
    };
});
