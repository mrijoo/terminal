const convertColor = {
    hex(hexColor) {
        this.styles.push(`38;2;${this.hexToRgb(hexColor).join(';')}`);
        return this;
    },

    hsl(h, s, l) {
        this.styles.push(`38;2;${this.hslToRgb(h, s, l).join(';')}`);
        return this;
    },

    rgb(r, g, b) {
        this.styles.push(`38;2;${r};${g};${b}`);
        return this;
    },

    ansi(code) {
        this.styles.push(`38;5;${code}`);
        return this;
    },

    random() {
        const colors = [196, 202, 208, 214, 220, 226, 190, 154, 118, 82, 46, 11, 10, 9, 8, 12, 19, 26, 33, 40, 47, 54, 61, 68, 74];
        const color = colors[Math.floor(Math.random() * colors.length)];
        this.styles.push(`38;5;${color}`);
        return this;
    },

    bgHex(hexColor) {
        this.styles.push(`48;2;${this.hexToRgb(hexColor).join(';')}`);
        return this;
    },

    bgHsl(h, s, l) {
        this.styles.push(`48;2;${this.hslToRgb(h, s, l).join(';')}`);
        return this;
    },

    bgRgb(r, g, b) {
        this.styles.push(`48;2;${r};${g};${b}`);
        return this;
    },

    bgAnsi(code) {
        this.styles.push(`48;5;${code}`);
        return this;
    },

    bgRandom() {
        const colors = [196, 202, 208, 214, 220, 226, 190, 154, 118, 82, 46, 11, 10, 9, 8, 12, 19, 26, 33, 40, 47, 54, 61, 68, 74];
        const color = colors[Math.floor(Math.random() * colors.length)];
        this.styles.push(`48;5;${color}`);
        return this;
    },

    color(colorName) {
        const colorCode = this.colorNameToCode(colorName);
        if (colorCode) {
            this.styles.push(`38;5;${colorCode}`);
        }
        return this;
    },

    bgColor(colorName) {
        const colorCode = this.colorNameToCode(colorName);
        if (colorCode) {
            this.styles.push(`48;5;${colorCode}`);
        }
        return this;
    },

    bold() {
        this.styles.push('1');
        return this;
    },

    dim() {
        this.styles.push('2');
        return this;
    },

    italic() {
        this.styles.push('3');
        return this;
    },

    underline() {
        this.styles.push('4');
        return this;
    },

    inverse() {
        this.styles.push('7');
        return this;
    },

    strikethrough() {
        this.styles.push('9');
        return this;
    },

    reset() {
        this.styles = [];
        return this;
    },

    hexToRgb(hexColor) {
        const hex = hexColor.replace(/^#/, '');
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    },

    hslToRgb(h, s, l) {
        s /= 100;
        l /= 100;
        const k = n => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = n =>
            l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
            return [Math.floor(255 * f(0)), Math.floor(255 * f(8)), Math.floor(255 * f(4))];
    },


    colorNameToCode(colorName) {
        const colorCodes = {
            black: 0,
            red: 1,
            green: 2,
            yellow: 3,
            blue: 4,
            magenta: 5,
            cyan: 6,
            white: 7,
            blackBright: 8,
            redBright: 9,
            greenBright: 10,
            yellowBright: 11,
            blueBright: 12,
            magentaBright: 13,
            cyanBright: 14,
            whiteBright: 15,
            gray: 16,
        };
        return colorCodes[colorName];
    }
}


function customColor(text, options) {
    const color = Object.create(convertColor);
    color.styles = [];

    if (typeof text !== 'string') {
        throw new TypeError('Expected a string');
    } else if (typeof options !== 'object') {
        throw new TypeError('Expected an object');
    } else if (options === null) {
        throw new TypeError('Expected an object');
    } else if (Array.isArray(options)) {
        throw new TypeError('Expected an object');
    } else if (typeof options === 'function') {
        throw new TypeError('Expected an object');
    }

    if (options.bold) {
        color.bold();
    }

    if (options.dim) {
        color.dim();
    }

    if (options.italic) {
        color.italic();
    }

    if (options.underline) {
        color.underline();
    }

    if (options.blink) {
        color.blink();
    }

    if (options.inverse) {
        color.inverse();
    }

    if (options.strikethrough) {
        color.strikethrough();
    }

    if (options.color) {
        color.color(options.color);
    }

    if (options.bgColor) {
        color.bgColor(options.bgColor);
    }

    if (options.hex) {
        color.hex(options.hex);
    }

    if (options.bgHex) {
        color.bgHex(options.bgHex);
    }

    if (options.hsl) {
        const [h, s, l] = options.hsl;
        color.hsl(h, s, l);
    }

    if (options.bgHsl) {
        const [h, s, l] = options.bgHsl;
        color.bgHsl(h, s, l);
    }

    if (options.rgb) {
        const [r, g, b] = options.rgb;
        color.rgb(r, g, b);
    }

    if (options.bgRgb) {
        const [r, g, b] = options.bgRgb;
        color.bgRgb(r, g, b);
    }

    if (options.ansi) {
        color.ansi(options.ansi);
    }

    if (options.bgAnsi) {
        color.bgAnsi(options.bgAnsi);
    }

    if (options.random) {
        color.random();
    }

    if (options.bgRandom) {
        color.bgRandom();
    }

    if (options.reset) {
        color.reset();
    }

    return `\x1b[${color.styles.join(';')}m${text}\x1b[0m`;
}

module.exports = customColor;