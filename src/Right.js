const Side = require('./Side');

class Right extends Side {
    constructor(value) {
        super();
        this._value = value;
    }
    static isRight(input) {
        return input instanceof Right;
    }
    static with(value) {
        return new Right(value);
    }
}

module.exports = Right;