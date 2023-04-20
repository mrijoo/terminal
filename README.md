# Text2image

## Instalation :
```
npm i @mrijoo/terminal
```

## Usage:
```js
const terminal = require('@mrijoo/terminal')
```

## Example
```js
const { color, select, spinner } = require('@mrijoo/terminal')

// Color
console.log(color('Hello World', { color: 'red' }))

// Color with options
const options = {
    color: 'red',
    bgColor: 'blue'
}

console.log(color('Hello World', options))

// All Options
const options = {
    bold: true,
    dim: true,
    italic: true,
    underline: true,
    inverse: true,
    strikethrough: true,
    color: 'red',
    bgColor: 'blue',
    hex: '#FF0000',
    bgHex: '#0000FF',
    hsl: [0, 100, 50],
    bgHsl: [240, 100, 50],
    rgb: [255, 0, 0],
    bgRgb: [0, 0, 255],
    ansi: 31,
    bgAnsi: 44,
    random: true,
    bgRandom: true
}

// Select
select({
    message: 'Select a color',
    choices: [
        'red',
        'green',
        'blue'
    ]
}).then((choice) => {
    console.log(`You selected ${color(choice, { color: choice })}`);
});

// Spinner with custom frames
spinner.start({
    frames: ['-', '+', '-'],
    message: "Loading...",
    interval: 100,
    period: 3000
}).then(() => {
    console.log("Done!");
});

// Spinner with period
spinner.start({
    frames: "dots",
    message: "Loading...",
    interval: 100,
    period: 3000
}).then(() => {
    console.log("Done!");
});

// Spinner with stop function
spinner.start({
    frames: "dots",
    message: "Loading...",
    interval: 100
})

setTimeout(() => {
    spinner.stop()
}, 3000)

```