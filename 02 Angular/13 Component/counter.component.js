(function() {
    "use strict";

    class CounterCtrl {
        constructor() {
            this.counter = 0;
        }

        inc() {
            ++this.counter;
        }
    }

    appModule.component("myCounter", {
        controller: CounterCtrl,
        templateUrl: "counter.component.html",
    });
})();
