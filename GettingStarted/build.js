const shelljs = require("shelljs");
const open = require("open");

shelljs.exec("node_modules\\.bin\\http-server.cmd", {
    async: true
});

console.log("XXX");
open("http://localhost:8080/index.html");
