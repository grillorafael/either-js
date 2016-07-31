const Left = require('../src/Left');
const Right = require('../src/Right');
const expect = require('chai').expect;

describe('Right', () => {
    describe('#isRight', () => {
        it('should return false if Left', () => {
            let left = Left.with(10);
            expect(Right.isRight(left)).to.be.false;
        });

        it('should return true if Right', () => {
            let right = Right.with(10);
            expect(Right.isRight(right)).to.be.true;
        });
    });
});