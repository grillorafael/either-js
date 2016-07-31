const Side = require('./Side');

class Left extends Side {
    constructor(value) {
        super();
        this._value = value;
    }
    static isLeft(input) {
        return input instanceof Left;
    }
    static with(value) {
        return new Left(value);
    }
}

module.exports = Left;