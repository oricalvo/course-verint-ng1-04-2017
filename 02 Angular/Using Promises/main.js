parent().then(function() {
    console.log("DONE");
}).catch(function(err) {
    console.log("ERR: " + err.message);
});

function parent() {
    // return Promise.resolve()
    //     .then(task1)
    //     .then(task2);

    return Promise.all([
        task1(),
        task2()
    ]);
}

function task1() {
    console.log("task1 started");

    return delay(2000).then(function() {
        throw new Error("task1 failed");
        //console.log("task1 finished");
    });
}

function task2(id) {
    console.log("task2 started");

    return delay(2000).then(function() {
        console.log("task2 finished");
    });
}

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, ms);
    });
}
