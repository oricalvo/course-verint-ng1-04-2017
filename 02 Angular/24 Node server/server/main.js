const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/api/contact", async function(req, res) {
    try {
        const contacts = await readJSONFile(path.join(__dirname, "../contacts.json"));
        await delay(1500);
        res.json(contacts);
    }
    catch(err) {
        res.status(500);
        res.statusMessage = err.message;
        res.end();
    }
});

app.use(express.static(path.join(__dirname, "..")));

app.listen(3000, function() {
    console.log("Server is running");
});

function readJSONFile(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, "utf8", function(err, text) {
            if(err) {
                reject(err);
                return;
            }

            console.log(text);

            resolve(JSON.parse(text));
        });
    });
}

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}
