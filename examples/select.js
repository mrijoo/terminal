const {
    color,
    select
} = require('..');

const options = {
    message: 'Select a color',
    choices: [
        'red',
        'green',
        'blue'
    ]
};

select(options).then((choice) => {
    console.log(`You selected ${color(choice, { color: choice })}`);
});