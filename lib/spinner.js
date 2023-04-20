let spinnerIntervalId;
const { color } = require('..');
const framesTemplate = Object.assign({}, require('./spinners.json'));
const defaultOptions = {
    frames: "clock",
    message: 'Loading...',
    interval: 100
};

const start = (Options) => new Promise((resolve, reject) => {
    let options = Object.assign({}, defaultOptions, Options);
    let {
        frames,
        framesColor,
        message,
        interval,
        period
    } = options;

    if (typeof frames === 'string') {
        frames = framesTemplate[frames];
    }

    if (framesColor) {
        if (typeof framesColor === 'string') {
            frames = frames.map(frame => color(frame, {
                color: framesColor
            }));
        } else if (typeof framesColor === 'object') {
            frames = frames.map(frame => color(frame, framesColor));
        }
    }

    let counter = 0;

    spinnerIntervalId = setInterval(() => {
        process.stdout.write(`\r${frames[counter]} ${message}`);
        counter = (counter + 1) % frames.length;
    }, interval);

    if (period) {
        setTimeout(() => {
            stop();
            resolve();
        }, period);
    }
});

const stop = () => new Promise((resolve, reject) => {
    clearInterval(spinnerIntervalId);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    resolve();
});

module.exports = {
    start,
    stop
}