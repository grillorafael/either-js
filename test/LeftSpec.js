const Left = require('../src/Left');
const Right = require('../src/Right');
const expect = require('chai').expect;

describe('Left', () => {
    describe('#isLeft', () => {
        it('should return true if Left', () => {
            let left = Left.with(10);
            expect(Left.isLeft(left)).to.be.true;
        });

        it('should return false if Right', () => {
            let right = Right.with(10);
            expect(Left.isLeft(right)).to.be.false;
        });
    });
});