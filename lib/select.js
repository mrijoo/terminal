const {
    color
} = require('..');
const readline = require('readline');

const defaultOptions = {
    outputStream: process.stdout,
    inputStream: process.stdin,
    prompt: color('>', {
        color: 'blue'
    }),
    unprompt: ' ',
    choices: [],
    defaultChoice: 0
};

module.exports = (Options) => new Promise((resolve, reject) => {
    let options = Object.assign({}, defaultOptions, Options);
    let {
        outputStream,
        inputStream,
        prompt,
        unprompt,
        message,
        choices,
        defaultChoice
    } = options;


    function showChoices() {
        readline.cursorTo(outputStream, 0, 0);
        readline.clearScreenDown(outputStream);
        console.log(message);
        choices.forEach((choice, index) => {
            if (index === defaultChoice) {
                console.log(`${prompt} ${choice}`);
            } else {
                console.log(`${unprompt} ${choice}`);
            }
        });
    };

    showChoices();

    readline.emitKeypressEvents(inputStream);
    inputStream.setRawMode(true);

    inputStream.on('keypress', (key, info) => {
        if (info.name === 'down') {
            defaultChoice++;

            if (defaultChoice >= choices.length) {
                defaultChoice = 0;
            }

            showChoices();
        }

        if (info.name === 'up') {
            defaultChoice--;

            if (defaultChoice < 0) {
                defaultChoice = choices.length - 1;
            }
            showChoices();
        }

        if (key === '\r') {
            inputStream.setRawMode(false);
            inputStream.pause();

            resolve(choices[defaultChoice]) ;
        }
    });
});