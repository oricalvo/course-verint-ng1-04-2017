var ObjectPool = (function() {
    "use strict";

    var MAGIC_FIELD = "$$$$$myMagicField$$$$";
    var nextId = 1000;

    function ObjectPool() {
        var map = {};

        function get() {
            for (var id in map) {
                var obj = map[id];
                delete map[id];
                return obj;
            }

            return null;
        }

        function add(obj) {
            var id = obj[MAGIC_FIELD];
            if(!id) {
                id = obj[MAGIC_FIELD] = ++nextId;
            }

            map[id] = obj;
        }

        return {
            get: get,
            add: add,
        };
    }

    return ObjectPool;
})();
