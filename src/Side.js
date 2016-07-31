class Side {
    get() {
        return this._value;
    }
    static isSide(input) {
        return input instanceof Side;
    }
}

module.exports = Side;