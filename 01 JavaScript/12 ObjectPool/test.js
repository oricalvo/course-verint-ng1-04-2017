(function() {
    "use strict";

    run();

    function run() {
        try {
            var p1 = ObjectPool();

            var ori = {};
            var roni = {};

            p1.add(ori);
            p1.add(ori);
            p1.add(roni);

            var res1 = p1.get();
            var res2 = p1.get();

            var res = (res1 == ori && res2 == roni) || (res1 == roni && res2 == ori);
            if(!res) {
                throw new Error("Invalid return value form get method");
            }

            console.log("PASS");
        }
        catch(err) {
            console.log("FAILED: " + err.message);
        }
    }
})();

