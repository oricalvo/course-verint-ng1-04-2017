parent();

async function parent() {
    await Promise.all([
        task1(),
        task2()
    ]);
    // await task1();
    // await task2();
    console.log("DONE");
}

async function task1() {
    console.log("task1 started");
    await delay(2000);
    console.log("task1 finished");
}

async function task2(id) {
    console.log("task2 started");
    await delay(2000)
    console.log("task2 finished");
}

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, ms);
    });
}
