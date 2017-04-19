var storage = (function() {
    "use strict";

    var lastActivity;
    var map;

    function save() {
        console.log("save");
    }

    function load() {
        console.log("load");
    }

    return {
        load: load,
        save: save,
    }
})();
