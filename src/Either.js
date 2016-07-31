const Side = require('./Side');
const Right = require('./Right');
const Left = require('./Left');

class Either {
    constructor(input) {
        if(!Side.isSide(input)) {
            throw new Error('Input have to be a Side instance');
        }
        else {
            this._left = Left.isLeft(input) ? input : undefined;
            this._right = Right.isRight(input) ? input : undefined;   
        }
    }
    rightValue() {
        if(this.isRight()) {
            return this._right.get();
        } else throw new Error('Trying to get right value of a left either');
    }
    leftValue() {
        if(this.isLeft()) {
            return this._left.get();
        } else throw new Error('Trying to get left value of a right either');
    }
    isLeft() {
        return Left.isLeft(this._left);
    }
    isRight() {
        return Right.isRight(this._right);
    }
    fold(leftCase, rightCase) {
        return this.isLeft() ? leftCase(this._left.get()) : rightCase(this._right.get());
    }
    static Right(value) {
        return Either.with(Right.with(value));
    }
    static Left(value) {
        return Either.with(Left.with(value));
    }
    static with(value) {
        return new Either(value);
    }
}

module.exports = Either;