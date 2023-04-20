"use strict";
const {
    color
} = require('..');

console.log(`${color('Bold', { bold: true })} ${color('Dim', { dim: true })} ${color('Italic', { italic: true })} ${color('Underline', { underline: true })} ${color('Inverse', { inverse: true })} ${color('Strikethrough', { strikethrough: true })} ${color('Black', { color: 'black' })} ${color('Red', { color: 'red' })} ${color('Green', { color: 'green' })} ${color('Yellow', { color: 'yellow' })} ${color('Blue', { color: 'blue' })} ${color('Magenta', { color: 'magenta' })} ${color('Cyan', { color: 'cyan' })} ${color('White', { color: 'white' })} ${color('blackBright', { color: 'blackBright' })} ${color('redBright', { color: 'redBright' })} ${color('greenBright', { color: 'greenBright' })} ${color('yellowBright', { color: 'yellowBright' })} ${color('blueBright', { color: 'blueBright' })} ${color('magentaBright', { color: 'magentaBright' })} ${color('cyanBright', { color: 'cyanBright' })} ${color('whiteBright', { color: 'whiteBright' })} ${color('Gray', { color: 'gray' })}
${color('Black', { bgColor: 'black' })} ${color('Red', { bgColor: 'red' })} ${color('Green', { bgColor: 'green' })} ${color('Yellow', { bgColor: 'yellow' })} ${color('Blue', { bgColor: 'blue' })} ${color('Magenta', { bgColor: 'magenta' })} ${color('Cyan', { bgColor: 'cyan' })} ${color('White', { bgColor: 'white' })} ${color('blackBright', { bgColor: 'blackBright' })} ${color('redBright', { bgColor: 'redBright' })} ${color('greenBright', { bgColor: 'greenBright' })} ${color('yellowBright', { bgColor: 'yellowBright' })} ${color('blueBright', { bgColor: 'blueBright' })} ${color('magentaBright', { bgColor: 'magentaBright' })} ${color('cyanBright', { bgColor: 'cyanBright' })} ${color('whiteBright', { bgColor: 'whiteBright' })} ${color('Gray', { bgColor: 'gray' })}`);

// const ignoreChars = /[^!-~]/g;

// const delay = m => new Promise(resolve => setTimeout(resolve, m));

// function rainbow(string, offset) {
//     if (!string || string.length === 0) {
//         return string;
//     }

//     const hueStep = 360 / string.replace(ignoreChars, '').length;

//     let hue = offset % 360;
//     const characters = [];
//     for (const character of string) {
//         if (character.match(ignoreChars)) {
//             characters.push(character);
//         } else {
//             characters.push(color(character, {
//                 hsl: [hue, 100, 50]
//             }));
//             hue = (hue + hueStep) % 360;
//         }
//     }

//     return characters.join('');
// }

// async function animateString(string) {
//     console.log();
//     for (let i = 0; i < 360 * 5; i++) {
//         console.log('\u001B[1F\u001B[G', rainbow(string, i));
//         await delay(2); // eslint-disable-line no-await-in-loop
//     }
// }

// animateString('Hello World');