const {
    color,
    select,
    spinner
} = require('./index.js');

spinner.start({
    frames: "dots",
    framesColor: {
        random: true
    },
    message: "Loading...",
    interval: 100,
    period: 3000 //can use period or stop() function
}).then(() => {
    console.log("Done!");
});

// setTimeout(() => {
//     spinner.stop();
//     console.log("Done!");
// }, 4000);